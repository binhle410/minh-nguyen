import {Injectable} from '@angular/core';

@Injectable()
export class ClinicListService {

  clinics = [
    {
      id: 1,
      name: 'Micheal Raykil',
      consumer: 100,
      voucher: 13,
      logo: '<img src="assets/img/app/browsers/chrome.svg"/>',
      email: 'peter@gmail.com',
      claim: 1
    }, 
    {
      id: 12,
      name: 'Micheal Raykil',
      consumer: 100,
      voucher: 24,
      location: 'Seattle, USA',
      logo: '<img src="assets/img/app/browsers/opera.svg"/>',
      email: 'mariaKeth@gmail.com',
      claim: 2
    },
    {
      id: 13,
      name: 'Micheal Raykil',
      consumer: 100,
      voucher: 53,
      location: 'Carolina, USA',
      logo: '<img src="assets/img/app/browsers/firefox.svg"/>',
      email: 'evant@gmail.com',
      claim: 4
    }, 
    {
      id: 14,
      name: 'Micheal Raykil',
      consumer: 100,
      voucher: 64,
      location: 'Kansas, USA',
      logo: '<img src="assets/img/app/browsers/ie.svg"/>',
      email: 'jonathan@gmail.com',
      claim: 4    
    }
  ];


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.clinics);
      }, 2000);
    });
  }
}
