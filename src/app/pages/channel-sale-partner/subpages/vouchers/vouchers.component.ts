import {Component, ViewEncapsulation} from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { VouchersService } from './vouchers.service';

@Component({
  selector: 'list-vouchers',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./bubbleMaps.scss')],
  template: require('./vouchers.html'),
})

export class Vouchers {

  query: string = '';

  // table settings: VOUCHER OF CHANNEL PARTNER
  settings = {    
    mode: 'external',
    actions: {
        add : false,
        edit : false,
        delete : false,
        columnTitle: ''
    },
    columns: {}
  };  
  
  source: LocalDataSource = new LocalDataSource();
  public topCSetting:any  = {
    pageTitle : 'Vouchers'
  };

  
  constructor(
    protected service: VouchersService) {
    
    this.setDataVouchers();

    // GET API DATA
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit() {}

  /* Start dev func ------------------------------------------------ */
  setDataVouchers () {
    this.settings.columns = {
      refNo : {
        title: "Ref no",
        type: 'number',
        filter: false
      },
      name : {
        title: "Name",
        type: 'string'
      },
      idNumb : {
        title: "Passport/ID Number",
        type: 'string'
      },
      nation : {
        title: "Nationality",
        type: 'string'
      },
      purcDate : {
        title: "Purchase Date",
        type: 'string',
        filter: false
      },
      ExprDate : {
        title: "Expiry Date",
        type: 'string',
        filter: false
      },
      price : {
        title: "Price",
        type: 'string'
      },
      payment : {
        title: "Payment",
        type: 'html'
      },
      totalClaim : {
        title: "Total Claims",
        type: 'number'
      },
      entit : {
        title: "Entitlement",
        type: 'string'
      },
      actions: {
        title: 'Actions',
        type: 'html',
        filter: false
      }
    };
  }

}
