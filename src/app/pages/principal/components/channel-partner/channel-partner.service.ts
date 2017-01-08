import {Injectable} from '@angular/core';

@Injectable()
export class ChannelPartnerService {

  channelPartnerData = [
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

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
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
