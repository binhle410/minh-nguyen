import { Routes, RouterModule }  from '@angular/router';

import { ChannelPartnerComp } from './channel-partner.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChannelPartnerComp,
    children: [
      { path: 'dashboard', loadChildren: () => System.import('./subpages/dashboard/dashboard.module') },
      { path: 'company', loadChildren: () => System.import('./subpages/company/company.module') },  
      { path: 'consumers', loadChildren: () => System.import('./subpages/consumers/consumers.module') },  
      { path: 'vouchers', loadChildren: () => System.import('./subpages/vouchers/vouchers.module') },
      { path: 'csp', loadChildren: () => System.import('./subpages/channel-sale-partner/csp.module') },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
