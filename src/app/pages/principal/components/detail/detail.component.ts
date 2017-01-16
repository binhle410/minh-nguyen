import {Component, ViewEncapsulation} from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';
import { DetailCPService } from './detail.service';

@Component({
  selector: 'detail-cp',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./bubbleMaps.scss')],
  template: require('./detail.html'),
})
export class DetailCP {
    
  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/browsers/opera.svg'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

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
  activePageTitle: string;

  
  constructor(
    protected service: DetailCPService) {

    this.activePageTitle = "Channel Partner";
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
