import {Injectable} from '@angular/core';

@Injectable()
export class SaleAccountsService {

  saleAccountsData = [
    {
      id: 1,
      address: 'New York, USA',
      email: 'mdo@gmail.com',
      firstname: 'Kay',
      lastname: 'Marcs',
      middlename: '',
      mobile: '123456789'
    }, 
    {
      id: 2,
      address: 'Califonia, USA',
      email: 'tester@gmail.com',
      firstname: 'Testing',
      lastname: 'Namy',
      middlename: '',
      mobile: '9781445'
    },
    {
      id: 3,
      address: 'Florida, USA',
      email: 'johnny@gmail.com',
      firstname: 'Kinoke',
      lastname: 'Haye',
      middlename: '',
      mobile: '555667825'
    }, 
    {
      id: 4,
      address: 'New York, USA',
      email: 'tester@gmail.com',
      firstname: 'Oarn',
      lastname: 'Portate',
      middlename: 'se',
      mobile: '0522562414'
    }
  ];


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.saleAccountsData);
      }, 2000);
    });
  }
}
