import { Routes, RouterModule }  from '@angular/router';

import { Dashboard } from './dashboard.component';
// import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
import { AuthGuard } from 'app/security/authGuard.service';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Dashboard,
    canActivate: [AuthGuard],

    children: [
      //{ path: 'treeview', component: TreeViewComponent }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
