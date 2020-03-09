import {NgModule} from '@angular/core';
import {CommonModule } from '@angular/common';
import {StockInventoryComponent} from './containers/stock-inventory/stock-inventory.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockStoreComponent } from './components/stock-store/stock-store.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';


import { FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
 declarations:[
    StockInventoryComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockStoreComponent
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