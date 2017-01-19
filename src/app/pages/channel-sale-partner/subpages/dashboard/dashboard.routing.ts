import { Routes, RouterModule }  from '@angular/router';
import { DashboardPrincipal } from './dashboard.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: DashboardPrincipal
  }
];

export const routing = RouterModule.forChild(routes);
