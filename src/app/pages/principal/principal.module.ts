import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './principal.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// COMPONENT
import { Principal } from './principal.component';

// #-- SUB MODULE Company
import { Company } from './components/company/company.component';

// #-- SUB MODULE Consumer
import { Consumers } from './components/consumers/consumers.component';
import { ConsumersService } from './components/consumers/consumers.service';
import { ConsumerVouchers } from './components/consumers/vouchers/vouchers.component';
import { ConsumerVouchersService } from './components/consumers/vouchers/vouchers.service';

// #-- SUB MODULE ChannelPartner
import { ChannelPartner } from './components/channel-partner/channel-partner.component';
import { ChannelPartnerService } from './components/channel-partner/channel-partner.service';

// #-- SUB MODULE ChannelSalePartner
import { ChannelSalePartner } from './components/channel-sale-partner/channel-sale-partner.component';
import { ChannelSalePartnerService } from './components/channel-sale-partner/channel-sale-partner.service';

// ...
import { DetailCP } from './components/detail/detail.component';
import { DetailCPService } from './components/detail/detail.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      Principal,
      Company,  

      Consumers,
      ConsumerVouchers,

      ChannelPartner,
      ChannelSalePartner,
      DetailCP
  ],
  providers: [
    ChannelPartnerService,
    ChannelSalePartnerService,
    DetailCPService,

    ConsumersService,
    ConsumerVouchersService
  ]
})
export default class MapsModule {}
