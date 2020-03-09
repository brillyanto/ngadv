import {Component} from '@angular/core';
import {  FormControl, FormGroup, FormArray } from '@angular/forms';
import { StockStoreComponent } from '../../components/stock-store/stock-store.component';

@Component({
    selector:'stock-inventory',
    styleUrls:['stock-inventory.component.scss'],
    template: `
    <div class="stock-inventory">
        <form [formGroup]="form" (ngSubmit)="onSubmit()">

            <stock-store></stock-store>

            <div formGroupName="store">
                <input type="text" formControlName="branch">
                <input type="text" formControlName="code">
            </div>
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
        })
    })

    onSubmit(){
        console.log('Submitted:',this.form.value)
    }
}