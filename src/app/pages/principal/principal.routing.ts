import { Routes, RouterModule }  from '@angular/router';

import { Principal } from './principal.component';
import { Company } from './components/company/company.component';

import { Consumers } from './components/consumers/consumers.component';
import { ConsumerVouchers } from './components/consumers/vouchers/vouchers.component';

import { ChannelPartner } from './components/channel-partner/channel-partner.component';
import { ChannelSalePartner } from './components/channel-sale-partner/channel-sale-partner.component';
import { DetailCP } from './components/detail/detail.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: Principal,
    children: [
      { path: 'company', component: Company },
      { path: 'consumers', component: Consumers },
      // { path: 'consumer/:id/vouchers', component: ConsumerVouchers },
      { path: 'consumer/:id', component: ConsumerVouchers },

      { path: 'channel-partner', component: ChannelPartner },
      { path: 'channel-partner', component: ChannelPartner },
      
      { path: 'channel-sale-partner', component: ChannelSalePartner },
      { path: 'detail-cp/:id', component: DetailCP }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
