import {Component} from '@angular/core';


@Component({
  selector: 'flat-buttons',
  template: require('./flatButtons.html'),
})
export class FlatButtons {

  constructor() {
  }
  click(){
    console.log("I was clicked");
  }
  alert(){
    alert("hello clicker");
  }
}
