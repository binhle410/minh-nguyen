import { NgModule }       from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { MgTable } from './mgTable.component';
import { jqxGridComponent } from './ts/angular_jqxgrid';
import { sharedMgTableModule } from '../../../pages/shared/shareMgTable.module';
@NgModule({
    imports: [BrowserModule, sharedMgTableModule],
    declarations: [ jqxGridComponent],
})
export class MgTableModule { }