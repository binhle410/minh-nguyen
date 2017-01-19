import { NgModule }      from '@angular/core';

// Module
import { DateRangeDirective } from '../directives/daterange.directive';

@NgModule({
  imports: [
  ],
  declarations: [
    DateRangeDirective
  ],
  exports: [
    DateRangeDirective
  ]
})
export class sharedDateRangeModule {}
