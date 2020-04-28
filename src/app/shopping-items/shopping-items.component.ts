import { Component, OnInit } from '@angular/core';
import { Shopping_item } from './shoping-item.model';
import { DataStorageService } from '../shared/data-storage.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-items',
  templateUrl: './shopping-items.component.html',
  styleUrls: ['./shopping-items.component.scss'],
})
export class ShoppingItemsComponent implements OnInit {
  public Shopping_items: Shopping_item[];
  private subscription: Subscription;
  constructor(private DataStorageService: DataStorageService) {
    this.subscription = this.DataStorageService.shopping_itemsChanged.subscribe(
      (shoppingItems: Shopping_item[]) => {
        this.Shopping_items = shoppingItems;
        this.Shopping_items.forEach((e) => {
          console.log(Boolean(e.Image_URL));
        });
      }
    );
  }

  ngOnInit() {
    this.DataStorageService.fetchData();
  }
}
