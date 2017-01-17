import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'product-detail',
  encapsulation: ViewEncapsulation.None,
  template: require('./productDetail.html'),
})
export class ProductDetail {

  public defaultPicture = 'assets/img/theme/no-photo.png';
  public profile:any = {
    picture: 'assets/img/app/profile/logo-company.jpg'
  };
  public uploaderOptions:any = {
    // url: 'http://website.com/upload'
  };

  public topCSetting:any  = {
    pageTitle : 'Product detail',
    subLink   : {
      url   : '/pages/principal/products',
      title : 'Products'
    }
  };

  constructor() {
  }

  ngOnInit() {
  }
}
