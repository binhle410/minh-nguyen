import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './cp.routing';
import { ChannelPartner } from './cp.component';
import { ChannelPartnerList } from './list/channel-partner.component';
import { ChannelPartnerService } from './list/channel-partner.service';

// Module
// import { MgTable } from '../../../../theme/components/mgTable/mgTable.component';
// import { MgTableModule } from '../../../../theme/components/mgTable/mgTable.module';
// import { sharedMgTableModule } from '../../../shared/shareMgTable.module';
import { jqxGridComponent } from '../../../../theme/components/mgTable/ts/angular_jqxgrid';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    // MgTableModule,
    // sharedMgTableModule
  ],
  declarations: [
    ChannelPartner,
    ChannelPartnerList,
    jqxGridComponent
    // MgTable
  ],
  providers: [
    ChannelPartnerService
  ]
})
export default class CspModule {}
