import { Routes, RouterModule }   from '@angular/router';
import { Products }     from './product.component';
import { ProductList } from './list/productList.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Products,
    children: [    
      { path: '', component: ProductList },
      { path: ':id', loadChildren: () => System.import('./+detail/productDetail.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
