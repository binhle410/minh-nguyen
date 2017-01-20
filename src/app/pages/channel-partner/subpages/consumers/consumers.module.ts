import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './consumers.routing';
import { Consumers } from './consumers.component';
import { ConsumerList } from './list/consumers.component';
import { ConsumerListService } from './list/consumers.service';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      Consumers,
      ConsumerList
  ],
  providers: [
    ConsumerListService
  ]
})
export default class ConsumersCPModule {}
