import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './dashboard.routing';
// COMPONENT
import { DashboardPrincipal } from './dashboard.component';
import { TrafficChart } from './trafficChart';
import { TrafficChartService } from './trafficChart/trafficChart.service';
import { LineChart } from './lineChart';
import { LineChartService } from './lineChart/lineChart.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
      DashboardPrincipal,
      TrafficChart,
      LineChart
  ],
  providers: [
      TrafficChartService,
      LineChartService
  ]
})
export default class DashboardModule {}
