import { Routes, RouterModule } from '@angular/router';
// import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
import { AuthGuard }                from 'app/security/authGuard.service';

export const routes: Routes = [
  // { path: 'login', loadChildren: () => System.import('./security/login/login.module')},
  // { path: 'register', loadChildren: () => System.import('./security/register/register.module')},

  { path: '', redirectTo: 'pages', pathMatch: 'full' },
  { path: '**', redirectTo: 'pages/dashboard' }
];

export const routing = RouterModule.forRoot(routes, { useHash: true });
