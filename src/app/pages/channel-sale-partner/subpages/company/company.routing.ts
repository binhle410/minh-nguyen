import { Routes, RouterModule }  from '@angular/router';
import { Company } from './company.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: Company }
];

export const routing = RouterModule.forChild(routes);
