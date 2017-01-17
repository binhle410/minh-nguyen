import {Injectable} from '@angular/core';

@Injectable()
export class ConsumerVouchersService {

  vouchersData = [
    {     
      refNo : 1,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 2,
      name : 'Kirte Shandy',
      idNumb : '1006579852',
      nation : 'Vietnamese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$1500',
      payment : '<div><p>Received</p></div>',
      totalClaim : 234,
      entit : '123',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 3,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 4,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 5,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 6,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 7,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    },
    {     
      refNo : 8,
      name : 'Hampden Sydney',
      idNumb : '7003279852',
      nation : 'Chinese',
      purcDate : '02/03/2016',
      ExprDate : '12/05/2016',
      price : '$2000',
      payment : '<div class="yellow-text"><p>Pending</p></div>',
      totalClaim : 234,
      entit : 'Unlimited',
      actions: "<a href='#' class='td-txt-action' title='View voucher'><i class='fa fa-newspaper-o' aria-hidden='true'></i></a>"
              + '&nbsp;&nbsp;&nbsp;&nbsp;'
              + "<a href='#' class='td-txt-action' title='Download voucher'><i class='fa fa-download' aria-hidden='true'></i></a>"
    }
  ];

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.vouchersData);
      }, 2000);
    });
  }
}
