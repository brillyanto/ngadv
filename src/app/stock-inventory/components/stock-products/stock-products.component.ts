import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';


@Component({
    selector: 'stock-products',
    styleUrls: ['./stock-products.component.scss'],
    template: `
    <div [formGroup]="parent">
        <div formArrayName="stocks">
            <div *ngFor="let stock of stocks; let i = index;" formGroupName="i">
                
            </div>
        </div>
    </div>
    `
})

export class StockProductsComponent{
 @Input()
 parent: FormGroup
}