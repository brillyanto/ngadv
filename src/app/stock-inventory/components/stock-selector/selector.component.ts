import { Component,Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-selector',
    styleUrls: ['./selector.component.scss'],
    template:`
    <div [formGroup]="parent">
        <div  formGroupName="selector">
            <select formControlName="product_id">
                <option value="">Select Stock</option>
                <option *ngFor="let product of products" [value]="product.id">{{product.name}}</option>
            </select>
            <input type="number" formControlName="quantity" step="10" minValue="10" maxValue="1000">
            <button type="button">Add Stock</button>
        </div>
    </div>
    `
})

export class StockSelectorComponent{
    @Input()
    parent: FormGroup;

    @Input()
    products:Product[];

}