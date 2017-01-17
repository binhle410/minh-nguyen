import { Routes, RouterModule }  from '@angular/router';
import { ProductDetail } from './productDetail.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  { path: '', component: ProductDetail }
];

export const routing = RouterModule.forChild(routes);
