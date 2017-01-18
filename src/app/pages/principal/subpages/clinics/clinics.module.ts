import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './clinics.routing';
import { Clinics } from './clinics.component';
import { ClinicList } from './list/clinicList.component';
import { ClinicListService } from './list/clinicList.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    Clinics,
    ClinicList
  ],
  providers: [
    ClinicListService
  ]
})
export default class ClinicsModule {}
