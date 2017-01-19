import { Directive, ElementRef, HostListener, Input, Renderer, OnChanges, SimpleChange, Output, EventEmitter, AfterViewInit } from '@angular/core';
import * as moment from 'moment';
import * as _ from 'lodash';
declare var $: any;
import './daterange.loader.ts';

@Directive({
  selector: '[date_range]',
  outputs: []
})

export class DateRangeDirective implements OnChanges, AfterViewInit {

    constructor(private _ele:ElementRef) {
      
    }

    ngOnChanges(changes: {[propertyName: string]: SimpleChange}) {     
      	
    }

    ngAfterViewInit(){
      this.dateRange(this._ele.nativeElement);
    }

    dateRange(iptDate) {    
      $(iptDate).daterangepicker({
          autoUpdateInput: false,
          locale: {
              cancelLabel: 'Clear'
          }
      });

      $(iptDate).on('apply.daterangepicker', function(ev, picker) {
          $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
      });

      $(iptDate).on('cancel.daterangepicker', function(ev, picker) {
          $(this).val('');
      });
    }
}