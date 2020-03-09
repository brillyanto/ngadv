import {Component} from '@angular/core';
import {  FormControl, FormGroup, FormArray } from '@angular/forms';
import { StockStoreComponent } from '../../components/stock-store/stock-store.component';

@Component({
    selector:'stock-inventory',
    styleUrls:['stock-inventory.component.scss'],
    template: `
    <div class="stock-inventory">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">
            <stock-store [parent]="form"></stock-store>
            <stock-selector [parent]="form"></stock-selector>
            <stock-products [parent]="form"></stock-products>

            <div class="stock-inventory__buttons">
                <input type="submit" >
            </div>
            <pre>{{form.value | json }}</pre>    
        </form>
    </div>
    `
})

export class StockInventoryComponent { 
    form = new FormGroup({
        store : new FormGroup({
            branch : new FormControl('MX905'),
            code: new FormControl('1679')
        }),
        selector: new FormGroup({
            product_id: new FormControl('23'),
            quantity: new FormControl('d')
        }),
        stocks: new FormArray([])
    })

    onSubmit(){
        console.log('Submitted:',this.form.value)
    }
}