import { NgModule } from '@angular/core';

import {ProductsRoutingModule, RoutedComponents} from './products-routing.module'

@NgModule({
    imports: [ProductsRoutingModule],
    exports: [],
    declarations: [RoutedComponents]
})
export class ProductsModule { }