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
    color: 'Black',
    discount: 5,
    imageUrl: '/assets/images/iphone.jpg',
    inStock: 7
  }

  productInStock() {
    return !(this.product.inStock > 0);
  }

  getDiscountedPrice() {
    return '$' + (this.product.price - (this.product.price * this.product.discount / 100)).toString();
  }
}
