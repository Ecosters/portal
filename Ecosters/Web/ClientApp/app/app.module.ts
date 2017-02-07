import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { AppComponent } from './app.component';

import { HomeModule } from './home/home.module';
import { CoreModule } from './core/core.module';
import { ProductsModule } from './products/products.module'
import { AppRoutingModule } from './app-routing';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        RouterModule,
        CoreModule,
        HomeModule,
        ProductsModule,
        AppRoutingModule
    ]
})
export class AppModule {
}
