import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './csp.routing';
import { ChannelSalePartner } from './csp.component';
import { ChannelSalePartnerList } from './list/channel-sale-partner.component';
import { SaleAccountsService } from './list/channel-sale-partner.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    ChannelSalePartner,
    ChannelSalePartnerList
  ],
  providers: [
    SaleAccountsService
  ]
})
export default class SaleAccountsModule {}
