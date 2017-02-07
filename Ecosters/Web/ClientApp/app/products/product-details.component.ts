import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'product-details',
    template: require('./product-details.component.html'),
    styles: [require('../theme.css'), require('../responsiveness.css')]
})

export class ProductDetailsComponent implements OnInit {
    ngOnInit() {

    }
}