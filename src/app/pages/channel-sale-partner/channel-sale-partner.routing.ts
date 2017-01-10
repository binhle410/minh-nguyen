import { Routes, RouterModule }  from '@angular/router';

import { ChannelSalePartnerComp } from './channel-sale-partner.component';
import { ListSalePartner } from './components/list/list.component';
import { SaleAccount } from './components/sale-account/sale-account.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChannelSalePartnerComp,
    children: [
      { path: 'list', component: ListSalePartner },
      { path: 'sale-account', component: SaleAccount },
    ]
  }
];

export const routing = RouterModule.forChild(routes);
