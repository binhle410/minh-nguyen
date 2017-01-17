import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../../theme/nga.module';

import { routing } from './cpDetail.routing';
import { CpDetail } from './cpDetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    CpDetail
  ],
  providers: [
  ]
})
export default class CspDetailModule {}
