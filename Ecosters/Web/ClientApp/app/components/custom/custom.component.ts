import { Component } from '@angular/core';
import {OnInit} from '@angular/core';

@Component({
    selector: 'custom',
    template: require('./custom.component.html')
})
export class CustomComponent implements OnInit {
    data: string;
    public CustomComponent() {
        
    }

    public ngOnInit() {
        this.data = "My Data _ 2";
    }
}