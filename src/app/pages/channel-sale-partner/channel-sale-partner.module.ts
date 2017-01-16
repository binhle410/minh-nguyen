import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './channel-sale-partner.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// COMPONENT
import { ChannelSalePartnerComp } from './channel-sale-partner.component';
import { ListSalePartner } from './components/list/list.component';
import { ListSalePartnerService } from './components/list/list.service';
import { SaleAccount } from './components/sale-account/sale-account.component';
import { SaleAccountService } from './components/sale-account/sale-account.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      ChannelSalePartnerComp,
      ListSalePartner,
      SaleAccount
  ],
  providers: [
    ListSalePartnerService,
    SaleAccountService
  ]
})
export default class MapsModule {}
