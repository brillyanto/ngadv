import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector: 'stock-products',
    styleUrls: ['./stock-products.component.scss'],
    template: `
    <div [formGroup]="parent">
        <div formArrayName="stocks">
            <div *ngFor="let stock of stocks; let i = index;">
                <div [formGroupName]="i">
                    <span>{{ getProduct(stock.value.product_id).name }}</span> &nbsp;&nbsp;
                    <span>{{ getProduct(stock.value.product_id).price | currency:'USD':'$' }}</span> &nbsp;&nbsp;
                    <input type="number" step="10" min="10" max="1000"
                    formControlName="quantity">
                    <button type="button" (click)="onRemove(stock, i)">Remove</button>
                </div>
            </div>
        </div>
    </div>`
})

export class StockProductsComponent{
 @Input()
 parent: FormGroup;

 @Output()
 removed = new EventEmitter<any>();

 @Input()
 map: Map<number, Product>;

  getProduct(id:number){
    return this.map.get(id);
  }

 onRemove(group, index){
    this.removed.emit({group, index}); // arg equivalent to {group:group, index:index}
 }

 get stocks(){
    return (this.parent.get('stocks') as FormArray).controls;
 }

}

