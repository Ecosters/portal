import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'home',
    template: require('./home.component.html'),
    styles: [require('../theme.css'), require('../responsiveness.css')]
})
export class HomeComponent implements OnInit
{
    public ngOnInit()
    {
        
    }
}