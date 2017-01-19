import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../../theme/nga.module';

import { routing } from './cspDetail.routing';
import { CspDetail } from './cspDetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    CspDetail
  ],
  providers: [
  ]
})
export default class CspDetailModule {}
