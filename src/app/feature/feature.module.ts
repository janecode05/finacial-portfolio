
import { NgModule } from '@angular/core';
import { CommonModule,DecimalPipe } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard';
import { BaseChartDirective } from 'ng2-charts';
import { RouterModule } from '@angular/router';
import { PortfolioFormComponent } from './portfolio/portfolio';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseChartDirective,
    RouterModule.forChild([{ path: '', component: DashboardComponent }]),
    DashboardComponent,
    DecimalPipe,
    PortfolioFormComponent
  ]
})
export class FeatureModule { 

}
