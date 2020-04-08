import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StockInventoryComponent} from './containers/stock-inventory/stock-inventory.component';
import { StockProductsComponent } from './components/stock-products/stock-products.component';
import { StockStoreComponent } from './components/stock-store/stock-store.component';
import { StockSelectorComponent } from './components/stock-selector/stock-selector.component';
import { StockInventoryService } from './services/stock-inventory.service';

@NgModule({

 declarations:[
    StockInventoryComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockStoreComponent
 ],

 providers: [
  StockInventoryService
 ],

 imports:[
     CommonModule,
     FormsModule,
     ReactiveFormsModule,
     HttpClientModule,
 ],

 exports:[
    StockInventoryComponent
 ]

})

export class StockInventoryModule {

}
