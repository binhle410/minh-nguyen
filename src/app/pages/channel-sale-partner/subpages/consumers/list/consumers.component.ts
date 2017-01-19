import {Component, ViewEncapsulation} from '@angular/core';
import { Router }            from '@angular/router';

import { ConsumerListService } from './consumers.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'consumer-list',
  encapsulation: ViewEncapsulation.None,
  template: require('./consumers.html'),
})
export class ConsumerList {

  public topCSetting:any         = {
    pageTitle : 'Consumers'
  };
  
  // *tb Settings
  query: string = '';
  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>'
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
      cPartner: {
        title: 'Channel Partner',
        type: 'html'
      },
      sPartner: {
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

  constructor(
    protected service: ConsumerListService,
    private _router: Router) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });  

    this.topCSetting.pageTitle = "Consumers";
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
    this._router.navigate(['pages/sale-partner/consumers', event.data.voucher]);
  }

  
}
