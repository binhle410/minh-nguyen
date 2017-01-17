import {Component, Input, Output, ElementRef, EventEmitter} from '@angular/core';

@Component({
  selector: 'mg-content-top',
  styles: [require('./mgContentTop.scss')],
  template: require('./mgContentTop.html'),
})

export class MgContentTop {
  @Input() topCSetting:any;
  public activePageTitle:string = '';
  public subLink: any;

  constructor() {}

  ngAfterViewInit() {
    // 1. Reset
    this.activePageTitle = '';
  
    // 2. Assign new
    if (!_.isEmpty(this.topCSetting)) {
      this.activePageTitle = this.topCSetting.pageTitle;
      console.log(this.activePageTitle);
      if (!_.isEmpty(this.topCSetting.subLink)) {
        this.subLink       = this.topCSetting.subLink;
      }      
    }    
  }
}
