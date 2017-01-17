import { Routes, RouterModule }  from '@angular/router';
import { CspDetail } from './cspDetail.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: CspDetail }
];

export const routing = RouterModule.forChild(routes);
