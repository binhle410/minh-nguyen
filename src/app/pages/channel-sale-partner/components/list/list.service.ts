import {Injectable} from '@angular/core';

@Injectable()
export class ListSalePartnerService {

  listSalePartnerData = [
    {
      voucher: 1,
      location: 'New York, USA',
      logo: '<img src="assets/img/app/browsers/opera.svg"/>',
      email: 'mdo@gmail.com',
      claim: '28'
    }, 
    {
      voucher: 2,
      location: 'Califonia, USA',
      logo: '<img src="assets/img/app/browsers/chrome.svg"/>',
      email: 'tester@gmail.com',
      claim: '2'
    },
    {
      voucher: 3,
      location: 'Florida, USA',
      logo: '<img src="assets/img/app/browsers/ie.svg"/>',
      email: 'johnny@gmail.com',
      claim: '8'
    }, 
    {
      voucher: 4,
      location: 'New York, USA',
      logo: '<img src="assets/img/app/browsers/firefox.svg"/>',
      email: 'tester@gmail.com',
      claim: '4'
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.listSalePartnerData);
      }, 2000);
    });
  }
}
