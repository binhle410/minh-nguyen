import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './cp.routing';
import { ChannelPartner } from './cp.component';
import { ChannelPartnerList } from './list/channel-partner.component';
import { ChannelPartnerService } from './list/channel-partner.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    ChannelPartner,
    ChannelPartnerList
  ],
  providers: [
    ChannelPartnerService
  ]
})
export default class CspModule {}
