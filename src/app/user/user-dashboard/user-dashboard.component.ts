import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { Ordered } from 'src/app/model/ordered';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';
//import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  user: User = {
    uid: '',
    email: '',
    displayName: '',
    emailVerified: true,
  };
  OrderObj: Ordered = {
    id: '',
    email: '',
    orderTime: '',
    orderedDishes: [],
    totalPrice: '',
    pickupTime: '',
    status: '',
  };
  orderList: Ordered[] = [];
  enum: number = 0;

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    const userData = localStorage.getItem('user');
    if (userData) {
      this.user = JSON.parse(userData);
    }
    this.getCard();
  }

  getCard() {
    this.data.getCard(this.user).subscribe((querySnapshot: any) => {
      querySnapshot.forEach((doc: any) => {
        this.orderList.push(doc.data());
        var totalPrice = Number(this.orderList[this.enum].totalPrice);
        this.orderList[this.enum].totalPrice = totalPrice.toFixed(2);
        this.enum += 1;
      });
    });
  }

  updateData() {
    this.orderList = [];
    this.ngOnInit();
  }
}
