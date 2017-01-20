import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './channel-partner.routing';
import { Ng2SmartTableModule } from 'ng2-smart-table';

// COMPONENT
import { ChannelPartnerComp } from './channel-partner.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      ChannelPartnerComp
  ],
  providers: [
  ]
})
export default class MapsModule {}
