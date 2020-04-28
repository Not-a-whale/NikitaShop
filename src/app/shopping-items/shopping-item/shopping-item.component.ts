import { Component, OnInit, Input } from '@angular/core';
import { Shopping_item } from '../shoping-item.model';

@Component({
  selector: 'app-shopping-item',
  templateUrl: './shopping-item.component.html',
  styleUrls: ['./shopping-item.component.scss'],
})
export class ShoppingItemComponent implements OnInit {
  @Input() Shopping_item: Shopping_item;
  @Input() index: number;
  type: String;
  typeIndentification(Shopping_item: Shopping_item) {
    Shopping_item.Description.indexOf('Router') !== -1
      ? (this.type = 'Роутер')
      : (this.type = 'Спутниковая тарелка');
  }
  constructor() {}

  ngOnInit(): void {
    this.typeIndentification(this.Shopping_item);
  }
}
