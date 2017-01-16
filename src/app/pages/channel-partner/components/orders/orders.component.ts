import {Component, ViewEncapsulation} from '@angular/core';
import { Router }            from '@angular/router';

import { OrdersPartnerService } from './orders.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'orders-partner',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('../smartTables.scss')],
  template: require('./orders.html'),
})
export class OrdersPartner {

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
      product_list: {
        title: 'Product List',
        type: 'string'
      },
      email: {
        title: 'Comsumer email',
        type: 'string'
      }, 
      name: {
        title: 'Comsumer name',
        type: 'string'
      },      
      payment: {
        title: 'Payment Status',
        type: 'html'
      }
    },
    mode: 'external'
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    protected service: OrdersPartnerService,
    private _router: Router) {
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
  }
}
