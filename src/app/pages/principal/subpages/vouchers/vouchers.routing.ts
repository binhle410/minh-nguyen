import { Routes, RouterModule }  from '@angular/router';
import { Vouchers } from './vouchers.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Vouchers
  }
];

export const routing = RouterModule.forChild(routes);
