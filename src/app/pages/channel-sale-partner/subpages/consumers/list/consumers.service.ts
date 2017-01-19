import {Injectable} from '@angular/core';

@Injectable()
export class ConsumerListService {

  channelPartnerData = [
    {
      fName: "Kay",
      lName: "Marcs",
      mName: "",
      cPartner: "Direct sales",
      sPartner: "Direct sales",
      location: 'New York, USA',
      logo: '<img src="assets/img/app/browsers/opera.svg"/>',
      email: 'mdo@gmail.com',
      voucher: 24,
      claim: 28,
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    }, 
    {
      fName: "Testing",
      lName: "Namy",
      mName: "so",
      cPartner: "<a class='has-link' href=''>Testing Clarks</a>",
      sPartner: "<a class='has-link' href=''>Testing Clarks</a>",
      voucher: 2,
      location: 'Califonia, USA',
      logo: '<img src="assets/img/app/browsers/chrome.svg"/>',
      email: 'tester@gmail.com',
      claim: '2',
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    },
    {
      fName: "Kinoke",
      lName: "Haye",
      mName: "",
      cPartner: "<a class='has-link' href=''>Kinoke Clarks</a>",
      sPartner: "<a class='has-link' href=''>Kinoke Clarks</a>",
      voucher: 3,
      location: 'Florida, USA',
      logo: '<img src="assets/img/app/browsers/ie.svg"/>',
      email: 'johnny@gmail.com',
      claim: '8',
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    }, 
    {
      fName: "Oarn",
      lName: "Portate",
      mName: "se",
      cPartner: "Direct sales",
      sPartner: "Direct sales",
      voucher: 4,
      location: 'New York, USA',
      logo: '<img src="assets/img/app/browsers/firefox.svg"/>',
      email: 'tester@gmail.com',
      claim: '4',
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    },
    {
      fName: "Kay",
      lName: "Marcs",
      mName: "",
      cPartner: "<a class='has-link' href=''>Koey Clarks</a>",
      sPartner: "<a class='has-link' href=''>Koey Clarks</a>",
      location: 'New York, USA',
      logo: '<img src="assets/img/app/browsers/opera.svg"/>',
      email: 'mdo@gmail.com',
      voucher: 24,
      claim: 28,
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    }, 
    {
      fName: "Testing",
      lName: "Namy",
      mName: "so",
      cPartner: "<a class='has-link' href=''>Testing Clarks</a>",
      sPartner: "<a class='has-link' href=''>Testing Clarks</a>",
      voucher: 2,
      location: 'Califonia, USA',
      logo: '<img src="assets/img/app/browsers/chrome.svg"/>',
      email: 'tester@gmail.com',
      claim: '2',
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    },
    {
      fName: "Kinoke",
      lName: "Haye",
      mName: "",
      cPartner: "Direct sales",
      sPartner: "Direct sales",
      voucher: 3,
      location: 'Florida, USA',
      logo: '<img src="assets/img/app/browsers/ie.svg"/>',
      email: 'johnny@gmail.com',
      claim: '8',
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
    }, 
    {
      fName: "Oarn",
      lName: "Portate",
      mName: "se",
      cPartner: "<a class='has-link' href=''>Koey Portate</a>",
      sPartner: "<a class='has-link' href=''>Koey Portate</a>",
      voucher: 4,
      location: 'New York, USA',
      logo: '<img src="assets/img/app/browsers/firefox.svg"/>',
      email: 'tester@gmail.com',
      claim: '4',
      actions: "<a href='#' class='td-txt-action' title='Voucher History'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
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
