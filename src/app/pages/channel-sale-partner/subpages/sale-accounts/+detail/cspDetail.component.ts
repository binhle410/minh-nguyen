import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'csp-detail',
  encapsulation: ViewEncapsulation.None,
  template: require('./cspDetail.html'),
})
export class CspDetail {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/logo-company.jpg'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  public topCSetting:any  = {
    pageTitle : 'Channel Sales Account Managers'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
