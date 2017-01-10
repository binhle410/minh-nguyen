import {Injectable} from '@angular/core';

@Injectable()
export class ChannelSalePartnerService {

  channelPartnerData = [
    {
      voucher: 1,
      location: 'San Francisco, USA',
      logo: '<img src="assets/img/app/browsers/chrome.svg"/>',
      email: 'peter@gmail.com',
      claim: '18'
    }, 
    {
      voucher: 2,
      location: 'Seattle, USA',
      logo: '<img src="assets/img/app/browsers/opera.svg"/>',
      email: 'mariaKeth@gmail.com',
      claim: '22'
    },
    {
      voucher: 3,
      location: 'Carolina, USA',
      logo: '<img src="assets/img/app/browsers/firefox.svg"/>',
      email: 'evant@gmail.com',
      claim: '48'
    }, 
    {
      voucher: 4,
      location: 'Kansas, USA',
      logo: '<img src="assets/img/app/browsers/ie.svg"/>',
      email: 'jonathan@gmail.com',
      claim: '4'
    }
  ];


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.channelPartnerData);
      }, 2000);
    });
  }
}
