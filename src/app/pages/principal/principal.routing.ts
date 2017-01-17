import { Routes, RouterModule }  from '@angular/router';
import { Principal } from './principal.component';


import { DetailCP } from './components/detail/detail.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '', component: Principal,
    children: [
      { path: 'company', loadChildren: () => System.import('./components/company/company.module') },    
      { path: 'consumers', loadChildren: () => System.import('./components/consumers/consumers.module') },    
      { path: 'cp', loadChildren: () => System.import('./components/channel-partner/cp.module') },  
      { path: 'csp', loadChildren: () => System.import('./components/channel-sale-partner/csp.module') },  
      //{ path: 'channel-sale-partner', component: ChannelSalePartner },
      { path: 'detail-cp/:id', component: DetailCP }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
