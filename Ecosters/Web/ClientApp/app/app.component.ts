import { Component } from '@angular/core';

@Component({
    selector: 'app',
    template: require('./app.component.html'),
    styles: [require('./theme.css'), require('./responsiveness.css')]
})
export class AppComponent { }