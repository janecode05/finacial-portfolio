import { Component, OnInit } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData } from 'chart.js';
import { CommonModule } from '@angular/common';
import { Investment } from '../../shared/models/investment.model';
import { PortfolioService } from '../../shared/service';
import { Chart, registerables } from 'chart.js';
import { Router, RouterModule } from '@angular/router';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [BaseChartDirective,CommonModule,RouterModule],
})
export class DashboardComponent implements OnInit {

  investments: Investment[] = [];

  pieChartLabels: string[] = [];
  pieChartData: number[] = [];
  pieChartConfig: ChartConfiguration<'pie'>['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };

  totalInvestment = 0;

  constructor(private portfolioService: PortfolioService) {}

  ngOnInit(): void {
    this.portfolioService.investments$.subscribe(data => {
      this.investments = data;
      this.prepareChart(data);
      this.totalInvestment = data.reduce((sum, inv) => sum + (inv.purchasePrice * inv.quantity), 0);
    });
  }

  prepareChart(data: Investment[]) {
    const grouped = data.reduce((acc, item) => {
      acc[item.assetType] = (acc[item.assetType] || 0) + (item.purchasePrice * item.quantity);
      return acc;
    }, {} as { [key: string]: number });

    this.pieChartLabels = Object.keys(grouped);
    this.pieChartData = Object.values(grouped);
  }
}
