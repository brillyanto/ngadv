import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {StockInventoryComponent} from './containers/stock-inventory/stock-inventory.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
 declarations:[
    StockInventoryComponent
 ],
 imports:[
     CommonModule,
     FormsModule,
     ReactiveFormsModule
 ],
 exports:[
    StockInventoryComponent
 ]
})

export class StockInventoryModule {

}