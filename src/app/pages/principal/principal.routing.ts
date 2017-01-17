import { Routes, RouterModule }  from '@angular/router';
import { Principal } from './principal.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: Principal,
    children: [
      { path: 'company', loadChildren: () => System.import('./subpages/company/company.module') },    
      { path: 'consumers', loadChildren: () => System.import('./subpages/consumers/consumers.module') },    
      { path: 'cp', loadChildren: () => System.import('./subpages/channel-partner/cp.module') },  
      { path: 'csp', loadChildren: () => System.import('./subpages/channel-sale-partner/csp.module') }     
    ]
  }
];

export const routing = RouterModule.forChild(routes);
