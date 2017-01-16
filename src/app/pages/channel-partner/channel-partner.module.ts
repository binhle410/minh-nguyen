import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './channel-partner.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// COMPONENT
import { ChannelPartnerComp } from './channel-partner.component';
import { ListPartner } from './components/list/list.component';
import { ListPartnerService } from './components/list/list.service';
import { OrdersPartner } from './components/orders/orders.component';
import { OrdersPartnerService } from './components/orders/orders.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      ChannelPartnerComp,
      ListPartner,
      OrdersPartner
  ],
  providers: [
    ListPartnerService,
    OrdersPartnerService
  ]
})
export default class MapsModule {}
