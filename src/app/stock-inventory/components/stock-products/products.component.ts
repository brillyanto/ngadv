import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-products',
    styleUrls: ['./products.component.scss'],
    template: `
    <div [formGroup]="parent">
        <div formGroupName="products"></div>
    </div>
    `
})

export class StockProductsComponent{
    @Input()
    parent: FormGroup;
}