import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../../theme/nga.module';

import { routing } from './productDetail.routing';
import { ProductDetail } from './productDetail.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing
  ],
  declarations: [
    ProductDetail
  ],
  providers: [
  ]
})
export default class ProductDetailModule {}
