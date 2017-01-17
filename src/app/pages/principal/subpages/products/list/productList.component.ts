import {Component, ViewEncapsulation} from '@angular/core';
import { Router }            from '@angular/router';

import { ProductListService } from './productList.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'product-list',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('../smartTables.scss')],
  template: require('./product-list.html'),
})
export class ProductList {
  public topCSetting:any         = {
    pageTitle : 'Products'
  };
  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>'
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>'
      //confirmDelete: true
    },
    columns: {
      logo: {
        title: 'Logo',
        type: 'html',
        filter: false
      },
      packageCode: {
        title: 'Package Code',
        type: 'string'
      },
      name: {
        title: 'Name',
        type: 'string'
      },      
      email: {
        title: 'Email',
        type: 'string'
      },
      costPrice : {
        title: "Cost Price",
        type: 'string'
      },
      recSalesVal : {
        title: "Recommended Sales Value",
        type: 'string'
      },
      entitlements : {
        title: "Entitlements",
        type: 'string'
      },
      consumer: {
         title: 'Consumers',
        type: 'number'
      },
      voucher: {
        title: 'Vouchers',
        type: 'number'
      }, 
      claim: {
        title: 'Channel Sale Partners',
        type: 'number'
      },
      recSellPrice : {
        title: "Recommended Selling Price",
        type: 'string'
      }
    },
    mode: 'external'
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ProductListService, 
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
    this._router.navigate(['pages/principal/products', event.data.id]);
  }
}
