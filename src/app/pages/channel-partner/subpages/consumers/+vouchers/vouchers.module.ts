import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './vouchers.routing';
// COMPONENT
import { ConsumerVouchers } from './vouchers.component';
import { ConsumerVouchersService } from './vouchers.service';

// MODULES
import { sharedDateRangeModule } from '../../../../shared/shareDateRange.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule,
    sharedDateRangeModule
  ],
  declarations: [
      ConsumerVouchers
  ],
  providers: [
    ConsumerVouchersService
  ]
})
export default class ConsumerVouchersModule {}
