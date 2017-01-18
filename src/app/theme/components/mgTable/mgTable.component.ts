import {Component, Input, Output, ElementRef, EventEmitter, ViewChild} from '@angular/core';
//import { jqxGridComponent } from './ts/angular_jqxgrid';

declare var jqxBaseFramework: any;
//import './mgTable.loader.ts';

@Component({
  selector: 'mg-table',
  styles: [require('./mgTable.scss')],
  //template: require('./mgTable.html'),
  template: 
        `<jqxGrid>
        </jqxGrid>`
})

export class MgTable {
  
  // @ViewChild('gridReference') myGrid: jqxGridComponent;
  //   clearFiltering(): void
  //   {
  //       this.myGrid.clearfilters();
  //   }
  //   data: any = generatedata(500);
  //   source: any =
  //   {
  //       localdata: this.data,
  //       datafields:
  //       [
  //           { name: 'name', type: 'string' },
  //           { name: 'productname', type: 'string' },
  //           { name: 'available', type: 'bool' },
  //           { name: 'date', type: 'date' },
  //           { name: 'quantity', type: 'number' }
  //       ],
  //       datatype: "array"
  //   };
  //   dataAdapter: any = new $.jqx.dataAdapter(this.source);
  //   columns: any[] =
  //   [
  //       {
  //           text: 'Name', columntype: 'textbox', filtertype: 'input', datafield: 'name', width: 215
  //       },
  //       {
  //           text: 'Product', filtertype: 'checkedlist', datafield: 'productname', width: 220
  //       },
  //       {
  //           text: 'Available', datafield: 'available', columntype: 'checkbox', filtertype: 'bool', width: 67
  //       },
  //       {
  //           text: 'Ship Date', datafield: 'date', filtertype: 'range', width: 210, cellsalign: 'right', cellsformat: 'd'
  //       },
  //       {
  //           text: 'Qty.', datafield: 'quantity', filtertype: 'number', cellsalign: 'right'
  //       }
  //   ]; 

  constructor() {}

  ngAfterViewInit() {
    //console.log(jqxGridComponent);
    
  }
  
}
