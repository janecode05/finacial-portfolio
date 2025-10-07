
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Investment } from './models/investment.model';

@Injectable({ providedIn: 'root' })

export class PortfolioService {

  private _investments = new BehaviorSubject<Investment[]>([
    { assetType: 'Stocks', quantity: 100, purchasePrice: 50, date: '2023-01-01' },
    { assetType: 'Bonds', quantity: 50, purchasePrice: 100, date: '2023-03-01' },
    { assetType: 'Mutual Funds', quantity: 30, purchasePrice: 200, date: '2023-06-01' }
  ]);

  investments$ = this._investments.asObservable();
}
