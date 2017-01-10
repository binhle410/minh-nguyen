import {Injectable} from '@angular/core';

@Injectable()
export class DetailCPService {

  detailPartnerData = [
    {
      product: 'Hampden-Sydney',
      employer: 'Richard McClintock',
      clinic: 'New York, USA',
      claim: '<i class="fa fa-check"></i>'
    },
    {
      product: 'Aldus PageMaker',
      employer: 'Johnny McDonal',
      clinic: 'Florida, USA',
      claim: '<i class="fa fa-times"></i>'
    },
    {
      product: 'Finibus Bonorum ',
      employer: 'Peter Henry',
      clinic: 'Califonia, USA',
      claim: '<i class="fa fa-check"></i>'
    },
    {
      product: 'Aldus Malorum',
      employer: 'Maria McDonal',
      clinic: 'Seattle, USA',
      claim: '<i class="fa fa-times"></i>'
    }
  ];


  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.detailPartnerData);
      }, 2000);
    });
  }
}
