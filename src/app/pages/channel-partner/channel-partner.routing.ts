import { Routes, RouterModule }  from '@angular/router';

import { ChannelPartnerComp } from './channel-partner.component';
import { ListPartner } from './components/list/list.component';
import { OrdersPartner } from './components/orders/orders.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: ChannelPartnerComp,
    children: [
      { path: 'list', component: ListPartner },
      { path: 'orders', component: OrdersPartner },
    //   { path: 'channel-sale-partner', component: ChannelSalePartner },
    //   { path: 'detail-cp/:id', component: DetailCP }
    ]
  }
];

export const routing = RouterModule.forChild(routes);
