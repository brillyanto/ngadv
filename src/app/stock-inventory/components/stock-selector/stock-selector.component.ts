import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Product } from 'src/app/stock-inventory/models/product.interface';

@Component({
    selector: 'stock-selector',
    styleUrls: ['./stock-selector.component.scss'],
    template: `
    <div [formGroup]="parent">
        <div formGroupName="selector">
            <select formControlName="product_id">
                <option value="">Select stock</option>
                <option *ngFor="let product of products" 
                [value]="product.id">{{product.name}}</option>
            </select>
            
            <input type="number" formControlName="quantity" 
            step="10" min="10" max="1000">

        </div>
    </div>
    `
})

export class StockSelectorComponent{
 @Input()
 parent: FormGroup

 @Input()
 products: Product
}