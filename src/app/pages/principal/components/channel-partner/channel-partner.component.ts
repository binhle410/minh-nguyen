import {Component, ViewEncapsulation} from '@angular/core';

import { ChannelPartnerService } from './channel-partner.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'channel-partner',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('../smartTables.scss')],
  template: require('./channel-partner.html'),
})
export class ChannelPartner {

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
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      email: {
        title: 'Admin Email',
        type: 'string'
      },
      voucher: {
        title: 'Voucher',
        type: 'number'
      }, 
      claim: {
        title: 'Claim',
        type: 'number'
      },      
      location: {
        title: 'Location',
        type: 'string'
      },
      logo: {
        title: 'Logo',
        type: 'html'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ChannelPartnerService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit() {
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
