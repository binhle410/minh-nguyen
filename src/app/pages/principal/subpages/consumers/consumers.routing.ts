import { Routes, RouterModule }  from '@angular/router';
import { Consumers } from './consumers.component';
import { ConsumerList } from './list/consumers.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Consumers,
    children: [    
      { path: '', component: ConsumerList },
      { path: ':id', loadChildren: () => System.import('./+vouchers/vouchers.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
