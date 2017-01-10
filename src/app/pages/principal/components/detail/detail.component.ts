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

  settings = {
    columns: {
      product: {
        title: 'Product',
        type: 'string'
      },
      claim: {
        title: 'Claimed',
        type: 'html',
        filter: false
      }, 
      employer: {
        title: 'Employer',
        type: 'string'
      },      
      clinic: {
        title: 'Clinic',
        type: 'string'
      }
    },
    mode: 'external',
    actions: {
        add : false,
        edit : false,
        delete : false,
        columnTitle: ''
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    protected service: DetailCPService) {
    this.service.getData().then((data) => {
      this.source.load(data);
    });
  }

  ngOnInit() {
  }
}
