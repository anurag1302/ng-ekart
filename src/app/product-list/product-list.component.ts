import { Component } from '@angular/core';
import { User } from '../Interfaces/User';

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
  };
  name: string = 'Test';
  addToCart: number = 0;
  searchText: string = '';



  productInStock() {
    return !(this.product.inStock > 0);
  }

  getDiscountedPrice() {
    return '$' + (this.product.price - (this.product.price * this.product.discount / 100)).toString();
  }

  onChange(event: any) {
    this.name = event.target.value;
  }

  decrement() {
    if (this.addToCart == 0) {
      return;
    }
    this.addToCart--;
  }

  increment() {
    this.addToCart++;
  }

  users: User[] = [{
    id: 101,
    firstName: 'John',
    lastName: 'Doe',
    dob: new Date(),
    city: 'NY',
    isAdmin: true
  },
  {
    id: 102,
    firstName: 'Mary',
    lastName: 'Sam',
    dob: new Date(),
    city: 'NJ',
    isAdmin: false
  },
  {
    id: 103,
    firstName: 'Dave',
    lastName: 'Batista',
    dob: new Date(),
    city: 'Chicago',
    isAdmin: true
  }
  ]
}
