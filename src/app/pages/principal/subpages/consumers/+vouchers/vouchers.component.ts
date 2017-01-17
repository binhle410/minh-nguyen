import {Component, ViewEncapsulation} from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { ConsumerVouchersService } from './vouchers.service';

@Component({
  selector: 'consumer-vouchers',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./bubbleMaps.scss')],
  template: require('./vouchers.html'),
})

export class ConsumerVouchers {

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
    pageTitle : 'Consumers',
    subLink   : {
      url   : '/pages/principal/consumers',
      title : 'Consumers'
    }
  };

  
  constructor(
    protected service: ConsumerVouchersService) {
    
    this.setDataVouchers();

    // GET API DATA
    this.service.getData().then((data) => {
      console.log(data);
      this.source.load(data);
    });
  }

  ngOnInit() {
    this.topCSetting.pageTitle = "Vouchers of Mae Chark A";
  }

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
        type: 'string'
      },
      ExprDate : {
        title: "Expiry Date",
        type: 'string'
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
