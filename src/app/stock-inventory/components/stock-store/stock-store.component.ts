import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'stock-store',
    styleUrls: ['./stock-store.component.scss'],
    template: `
    <div [formGroup]="parent">
        <div formGroupName="store">
            <input type="text" formControlName="branch">
            <input type="text" formControlName="code">
        </div>
    </div>
    `
})

export class StockStoreComponent{
 @Input()
 parent: FormGroup
}