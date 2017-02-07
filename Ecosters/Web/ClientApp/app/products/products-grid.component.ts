import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'products-list',
    template: require('./products-grid.component.html'),
    styles: [require('../theme.css'), require('../responsiveness.css')]
})
export class ProductsGridComponent implements OnInit
{
    public ngOnInit()
    {

    }
}