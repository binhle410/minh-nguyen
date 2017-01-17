import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../../../theme/nga.module';

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { routing }       from './product.routing';
import { Products } from './product.component';
import { ProductList } from './list/productList.component';
import { ProductListService } from './list/productList.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgaModule,
    routing,
    Ng2SmartTableModule
  ],
  declarations: [
    Products,
    ProductList
  ],
  providers: [
    ProductListService
  ]
})
export default class ProductsModule {}
