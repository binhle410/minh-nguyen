import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'cp-detail',
  encapsulation: ViewEncapsulation.None,
  template: require('./cpDetail.html'),
})
export class CpDetail {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/logo-company.jpg'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  public topCSetting:any  = {
    pageTitle : 'Channel Partner Detail'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
