import { Routes } from '@angular/router';
import { DashboardComponent } from './feature/dashboard/dashboard';
import { PortfolioFormComponent } from './feature/portfolio/portfolio';


export const routes: Routes = [

    {
        path: '',
        redirectTo : 'overview',
        pathMatch : 'full',
        
    } ,
    { path: 'overview', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) },
    {
  path: 'portfolio',
  loadComponent: () =>
    import('./feature/portfolio/portfolio').then(m => m.PortfolioFormComponent)
}


];
