import { Routes, RouterModule }  from '@angular/router';
import { CpDetail } from './cpDetail.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: CpDetail }
];

export const routing = RouterModule.forChild(routes);
