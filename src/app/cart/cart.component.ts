import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'pm-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public pageTitle = 'Shopping Cart';
  items;
  imageWidth = 50;
  imageMargin = 2;

  constructor(
    private cartService: CartService
  ) { 
    this.items = this.cartService.getItems();
  }

  ngOnInit() {
  }

}
