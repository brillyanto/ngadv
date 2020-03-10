import { Component } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';
import { StockStoreComponent } from '../../components/stock-store/stock-store.component';
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

    products: Product[] = [
        {
            id: 1,
            name: "Apple IPod",
            price: 100
        },
        {
            id: 2,
            name: "Apple IPhone",
            price: 1000
        },
        {
            id: 3,
            name: "Apple Macbook Pro",
            price: 3000
        }
    ];

    form = new FormGroup({
        store : new FormGroup({
            branch : new FormControl('MX905'),
            code: new FormControl('1679')
        }),
        selector: this.createStock({ product_id:1, quantity:10 }),
        stocks: new FormArray([
            this.createStock({ product_id:1, quantity:10 }),
            this.createStock({ product_id:3, quantity:50 })
        ])
    })

    createStock(stock){
        return new FormGroup({
            product_id: new FormControl( parseInt(stock.product_id, 10)  || ''),
            quantity: new FormControl(stock.quantity || 10)
        });
    }

    addStock(stock){
        const controls = this.form.get('stocks') as FormArray;
        controls.push( this.createStock(stock) );
        
    }

    removeStock({stock, index}: {stock:FormGroup, index:number}){
        const controls = this.form.get('stocks') as FormArray;
        controls.removeAt(index);
    }

    onSubmit(){
        console.log('Submitted:',this.form.value)
    }
}