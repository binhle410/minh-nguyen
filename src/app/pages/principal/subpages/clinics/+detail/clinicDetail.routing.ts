import { Routes, RouterModule }  from '@angular/router';
import { ClinicDetail } from './clinicDetail.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ClinicDetail }
];

export const routing = RouterModule.forChild(routes);
