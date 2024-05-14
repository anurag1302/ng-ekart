import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  product = {
    name: 'iPhone 14',
    price: 999,
    color: 'Black'
  }

}
