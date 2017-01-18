import {Component, ViewEncapsulation} from '@angular/core';
import { Router }            from '@angular/router';

import { ClinicListService } from './clinicList.service';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'clinic-list',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('../smartTables.scss')],
  template: require('./clinic-list.html'),
})
export class ClinicList {
  public topCSetting:any         = {
    pageTitle : 'Clinics'
  };
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
      name: {
        title: 'Name',
        type: 'string'
      },      
      email: {
        title: 'Email',
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
      logo: {
        title: 'Logo',
        type: 'html',
        filter: false
      }
    },
    mode: 'external'
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ClinicListService, 
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
    this._router.navigate(['pages/principal/clinics', event.data.id]);
  }
}
