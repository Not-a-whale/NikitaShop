import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Shopping_item } from '../shopping-items/shoping-item.model';
import { Subject } from 'rxjs';

@Injectable()
export class DataStorageService {
  shopping_itemsChanged = new Subject<Shopping_item[]>();
  Shopping_items: Shopping_item[];

  setShoppingItems(items: Shopping_item[]) {
    this.Shopping_items = items;
    this.shopping_itemsChanged.next(this.Shopping_items.slice());
  }

  fetchData() {
    this.http
      .get<Shopping_item[]>(
        'https://nikitashop-75620.firebaseio.com/Shoping-items.json'
      )
      .subscribe((shopping_items) => {
        this.setShoppingItems(shopping_items);
      });
  }
  constructor(private http: HttpClient) {}
}
