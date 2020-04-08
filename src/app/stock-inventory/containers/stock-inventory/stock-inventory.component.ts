import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Product, Item } from '../../models/product.interface';
import { Observable, forkJoin } from 'rxjs';
import { StockInventoryService } from '../../services/stock-inventory.service';


@Component({
    selector:'stock-inventory',
    styleUrls:['stock-inventory.component.scss'],
    template: `
    <div class="stock-inventory">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <stock-store [parent]="form"></stock-store>
            <stock-selector [parent]="form" [products]="products" (added)="addStock($event)"></stock-selector>
            <stock-products [parent]="form" [map]="productMap" (removed)="removeStock($event)"></stock-products>
            <div class="stock-inventory__buttons">
                <input type="submit" >
            </div>
            <pre>{{form.value | json }}</pre>
        </form>
    </div>
    `
})

export class StockInventoryComponent implements OnInit {

    products: Product[];
    items: Item[];

    productMap: Map<number, Product>;

    constructor(private fb: FormBuilder, private stockService: StockInventoryService){}

    ngOnInit(){
      const cart = this.stockService.getCartItems();
      const products = this.stockService.getProducts();

      forkJoin(
        cart, products
      )
      .subscribe(
        ([cart, products]: [Item[], Product[]]) => {
          const myMap = products.map<[number,Product]>( product => [product.id, product] )
          // console.log(myMap);
          this.productMap = new Map<number, Product>(myMap);
          console.log(this.productMap);
          this.products = products;

          cart.forEach(item => {
            this.addStock(item);
          });
        }
      );
    }

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
