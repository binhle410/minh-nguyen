import {Component, ViewEncapsulation} from '@angular/core';


@Component({
  selector: 'company',
  encapsulation: ViewEncapsulation.None,
  //styles: [require('./bubbleMaps.scss')],
  template: require('./company.html'),
})
export class Company {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/logo-company.jpg'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  constructor() {
  }

  ngOnInit() {
  }
}
