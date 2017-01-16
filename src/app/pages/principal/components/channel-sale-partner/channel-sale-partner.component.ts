import {Component, ViewEncapsulation} from '@angular/core';

import { ChannelSalePartnerService } from './channel-sale-partner.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'channel-sale',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('../smartTables.scss')],
  template: require('./channel-sale-partner.html'),
})
export class ChannelSalePartner {
  public activePageTitle: string = 'Channel Sale Partner';
  // *tb Settings
  query: string = '';
  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>'
      //confirmDelete: true
    },
    columns: {
      fName: {
        title: 'First name',
        type: 'string'
      },
      mName: {
        title: 'Middle name',
        type: 'string'
      },
      lName: {
        title: 'Last Email',
        type: 'string'
      }, 
      location: {
        title: 'Address',
        type: 'string'
      },
      email: {
        title: 'Admin Email',
        type: 'string'
      },
      voucher: {
        title: 'Total vouchers',
        type: 'number'
      }, 
      claim: {
        title: 'Total claims',
        type: 'number'
      },
      logo: {
        title: 'Logo',
        type: 'html',
        filter: false
      },
      cPartner: {
        title: 'Sales Partner',
        type: 'html'
      },
      actions: {
        title: 'Actions',
        type: 'html',
        filter: false
      }
    },
    mode: 'external'    
  };


  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ChannelSalePartnerService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit() {
  }

  onDelete(event) {
    console.log(event);
    // if (window.confirm('Are you sure you want to delete?')) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }

  onCreate(event) {
    console.log(event);
  }

  onEdit(event) {
    console.log(event);
  }
}
