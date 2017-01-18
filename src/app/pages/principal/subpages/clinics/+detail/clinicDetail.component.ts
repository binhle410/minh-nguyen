import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'clinic-detail',
  encapsulation: ViewEncapsulation.None,
  template: require('./clinicDetail.html'),
})
export class ClinicDetail {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/logo-company.jpg'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  public topCSetting:any  = {
    pageTitle : 'Clinic Detail'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
