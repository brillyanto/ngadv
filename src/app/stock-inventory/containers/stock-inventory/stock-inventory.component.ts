import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Product } from '../../models/product.interface';

@Component({
    selector:'stock-inventory',
    styleUrls:['stock-inventory.component.scss'],
    template: `
    <div class="stock-inventory">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <stock-store [parent]="form"></stock-store>
            <stock-selector [parent]="form" [products]="products" (added)="addStock($event)"></stock-selector>
            <stock-products [parent]="form" (removed)="removeStock($event)"></stock-products>
            <div class="stock-inventory__buttons">
                <input type="submit" >
            </div>
            <pre>{{form.value | json }}</pre>
        </form>
    </div>
    `
})

export class StockInventoryComponent {

    products: Product[];

    constructor(private fb: FormBuilder){}

    form = this.fb.group({
        store : this.fb.group({
            branch : 'MX905',
            code: '1679'
        }),
        selector: this.createStock({ product_id:1, quantity:10 }),
        stocks: new FormArray([])
    })

    createStock(stock:any){
        return this.fb.group({
            product_id:  parseInt(stock.product_id, 10)  || '',
            quantity: stock.quantity || 10
        });
    }

    addStock(stock:any){
        const controls = this.form.get('stocks') as FormArray;
        controls.push( this.createStock(stock) );
    }

    removeStock({stock, index}: {stock:FormGroup, index:number}){
        const controls = this.form.get('stocks') as FormArray;
        controls.removeAt(index);
    }

    onSubmit(){
        console.log('Submitted:',this.form.value);
    }
}
