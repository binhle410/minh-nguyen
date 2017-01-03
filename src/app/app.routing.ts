import { Routes, RouterModule } from '@angular/router';
// import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
import { AuthGuard }                from 'app/security/authGuard.service';

export const routes: Routes = [
  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }
];

export const AUTH_PROVIDERS = [AuthGuard];
export const APP_ROUTER_PROVIDERS = [
  AUTH_PROVIDERS
];



export const routing = RouterModule.forRoot(routes, { useHash: true });
