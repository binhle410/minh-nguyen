import { Routes, RouterModule }   from '@angular/router';
import { ChannelSalePartner }     from './csp.component';
import { ChannelSalePartnerList } from './list/channel-sale-partner.component';
// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChannelSalePartner,
    children: [    
      { path: '', component: ChannelSalePartnerList },
      { path: ':id', loadChildren: () => System.import('./+detail/cspDetail.module') }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
