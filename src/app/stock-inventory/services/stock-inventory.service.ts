import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product, Item } from '../models/product.interface';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable()
export class StockInventoryService{
  constructor(private http:HttpClient){ }
  getCartItems(): Observable<Item[]>{
    return this.http.get('http://localhost:3000/stocks')
    .pipe(
      map( (response: any) => response ),
      catchError((error :any) => Observable.throw(error.json()))
    );
  }

  getProducts(): Observable<Product[]>{
    return this.http.get('http://localhost:3000/products')
    .pipe(
      map( (response: any) => response ),
      catchError((error :any) => Observable.throw(error.json()))
    );
  }

}
