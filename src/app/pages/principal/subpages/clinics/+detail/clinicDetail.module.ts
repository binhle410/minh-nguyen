import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../../theme/nga.module';

import { routing } from './clinicDetail.routing';
import { ClinicDetail } from './clinicDetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ClinicDetail
  ],
  providers: [
  ]
})
export default class ClinicDetailModule {}
