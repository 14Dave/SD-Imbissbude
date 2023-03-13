import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from 'src/app/model/dish';
import { Ordered } from 'src/app/model/ordered';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  items!: Dish[];
  OrderObj: Ordered = {
    id: '',
    email: '',
    orderTime: '',
    orderedDishes: [],
    totalPrice: '',
    pickupTime: '',
    status: '',
  };
  user: any;
  price: number = 0;
  date: string = '';
  time: any = '';

  constructor(private data: DataService, private router: Router) {}
  ngOnInit() {
    const card = localStorage.getItem('card');
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    if (card) {
      this.items = JSON.parse(card);
    } else return;

    this.OrderObj.email = this.user.email;
    var time = new Date();
    this.OrderObj.orderTime = time.toLocaleString();
    this.OrderObj.status = 'Offen';
    this.items.forEach((item) => {
      this.OrderObj.orderedDishes.push(item.name);
    });
    this.items.forEach((item) => {
      this.price += Number(item.price);
    });
    this.OrderObj.totalPrice = this.price.toString();
    console.log(this.OrderObj);
  }

  buy() {
    this.OrderObj.pickupTime = this.data.toString() + '' + this.time.toString();
    this.data.addToCard(this.OrderObj);
    localStorage.removeItem('card');
    this.router.navigate(['dashboard']);
  }
}
