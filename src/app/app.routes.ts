import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { START_PAGE, CALCULATE_PAGE } from './shared/constants';

export const routes: Routes = [
    {
        path: '',
        // canActivate: [AuthGuard],
        loadComponent: () => import('./pages/home/home.component')
            .then(c => c.HomeComponent)
    },
    {
        path: START_PAGE,
        loadComponent: () => import('./pages/start-up/start-up.component')
            .then(c => c.StartUpComponent)
    },
    {
        path: CALCULATE_PAGE,
        loadComponent: () => import('./pages/calculate/calculate.component')
            .then(c => c.CalculateComponent)
    }
];
