import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { START_PAGE, CALCULATE_PAGE, USER_PROFILE_PAGE, USER_SETTINGS_PAGE, CRYPTO_PROFILE_PAGE } from './shared/constants';

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
    },
    {
        path: USER_PROFILE_PAGE,
        loadComponent: () => import('./pages/user-profile/user-profile.component')
            .then(c => c.UserProfileComponent)
    },
    {
        path: USER_SETTINGS_PAGE,
        loadComponent: () => import('./pages/user-settings/user-settings.component')
            .then(c => c.UserSettingsComponent)
    },
    {
        path: CRYPTO_PROFILE_PAGE + '/:id',
        loadComponent: () => import('./pages/crypto-profile/crypto-profile.component')
            .then(c => c.CryptoProfileComponent)
    }
];
