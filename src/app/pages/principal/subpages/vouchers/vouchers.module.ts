import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './vouchers.routing';
// COMPONENT
import { Vouchers } from './vouchers.component';
import { VouchersService } from './vouchers.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      Vouchers
  ],
  providers: [
    VouchersService
  ]
})
export default class VouchersModule {}
