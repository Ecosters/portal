import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsGridComponent } from './products-grid.component';
import { ProductDetailsComponent } from './product-details.component';

const routes: Routes = [
    { path: 'products', component: ProductsGridComponent },
    { path: 'products/:id', component: ProductDetailsComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule { }

export const RoutedComponents = [ProductsGridComponent, ProductDetailsComponent];