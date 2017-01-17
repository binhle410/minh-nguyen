import { Routes, RouterModule }  from '@angular/router';
import { ConsumerVouchers } from './vouchers.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ConsumerVouchers
  }
];

export const routing = RouterModule.forChild(routes);
