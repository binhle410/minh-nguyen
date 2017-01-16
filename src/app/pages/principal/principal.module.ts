import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './principal.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// COMPONENT
import { Principal } from './principal.component';
import { Company } from './components/company/company.component';
import { ChannelPartner } from './components/channel-partner/channel-partner.component';
import { ChannelPartnerService } from './components/channel-partner/channel-partner.service';
import { ChannelSalePartner } from './components/channel-sale-partner/channel-sale-partner.component';
import { ChannelSalePartnerService } from './components/channel-sale-partner/channel-sale-partner.service';
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
      ChannelPartner,
      ChannelSalePartner,
      DetailCP
  ],
  providers: [
    ChannelPartnerService,
    ChannelSalePartnerService,
    DetailCPService
  ]
})
export default class MapsModule {}
