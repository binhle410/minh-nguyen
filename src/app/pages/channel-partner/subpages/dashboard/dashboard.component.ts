import {Component, ViewEncapsulation} from '@angular/core';

import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'dashboard-principal',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./bubbleMaps.scss')],
  template: require('./dashboard.html'),
})

export class DashboardPrincipal {

  public topCSetting:any  = {
    pageTitle : 'Dashboard'
  };

  
  constructor() {    
  }

  ngOnInit() {}

}
