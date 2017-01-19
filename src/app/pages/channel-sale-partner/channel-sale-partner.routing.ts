import { Routes, RouterModule }  from '@angular/router';

import { ChannelSalePartnerComp } from './channel-sale-partner.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChannelSalePartnerComp,
    children: [
      { path: 'dashboard', loadChildren: () => System.import('./subpages/dashboard/dashboard.module') },
      { path: 'company', loadChildren: () => System.import('./subpages/company/company.module') },    
      { path: 'consumers', loadChildren: () => System.import('./subpages/consumers/consumers.module') },  
      { path: 'vouchers', loadChildren: () => System.import('./subpages/vouchers/vouchers.module') },
      { path: 'channel-partners', loadChildren: () => System.import('./subpages/channel-partner/cp.module') },
      { path: 'account-managers', loadChildren: () => System.import('./subpages/sale-accounts/csp.module') },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
