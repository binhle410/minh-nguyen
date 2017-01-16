import {Injectable} from '@angular/core';

@Injectable()
export class OrdersPartnerService {

  orderPartnerData = [
    {
      product_list: 'Product 1',
      name: 'Peter Mcdonald',
      payment: '<span class="btn btn-primary w180">Make payment</span>',
      email: 'peter@gmail.com',
    },
    {
      product_list: 'Product 2',
      name: 'Mac Henry',
      payment: '<span class="btn btn-warning w180">Cancel payment</span>',
      email: 'mac_henry@gmail.com',
    },
    {
      product_list: 'Product 3',
      name: 'Johnny Rock',
      payment: '<span class="btn btn-success w180">Confirmed payment</span>',
      email: 'johnny@gmail.com',
    },
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.orderPartnerData);
      }, 2000);
    });
  }
}
