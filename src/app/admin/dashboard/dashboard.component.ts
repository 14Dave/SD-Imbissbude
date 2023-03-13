import { Component, OnInit } from '@angular/core';
import { Ordered } from 'src/app/model/ordered';
import { User } from 'src/app/model/user';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
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

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders() {
    this.data.getAllOrders().subscribe(
      (res) => {
        this.orderList = res.map((e: any) => {
          const data = e.payload.doc.data();
          data.id = e.payload.doc.id;
          return data;
        });
      },
      (err) => {
        alert(err.message);
      }
    );
  }
}
