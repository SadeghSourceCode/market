import { START_PAGE } from '../constants';
import { isPlatformBrowser } from '@angular/common';
import { CanActivate, Router } from '@angular/router';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private router: Router,
        @Inject(PLATFORM_ID) private platformId: Object
    ) {}

    canActivate(): boolean {
        if(isPlatformBrowser(this.platformId)) {
            const auth = localStorage.getItem('auth');
            if (auth) {
                const authData = JSON.parse(auth);
                if (authData.access) {
                    return true;
                }
            }
            this.router.navigate([START_PAGE]);
            return false;
        }
        return false;
    }
}