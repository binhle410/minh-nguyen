import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './channel-sale-partner.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// COMPONENT
import { ChannelSalePartnerComp } from './channel-sale-partner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      ChannelSalePartnerComp
  ],
  providers: [
  ]
})
export default class SalePartnerModule {}
