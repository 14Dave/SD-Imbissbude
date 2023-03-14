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
  date: string = '';
  time: string = '';

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
          var totalPrice = Number(data.totalPrice);
          data.totalPrice = totalPrice.toFixed(2);
          return data;
        });
      },
      (err) => {
        alert(err.message);
      }
    );
  }

  addOrder(order: Ordered) {
    this.data.addToCard(order);
  }

  deleteOrder(order: Ordered) {
    this.data.deleteOrder(order);
  }

  statusRejected(order: Ordered) {
    this.deleteOrder(order);
    order.status = 'Abgelehnt';
    this.addOrder(order);
  }

  statusWorkedOn(order: Ordered) {
    this.deleteOrder(order);
    order.status = 'in Bearbeitung';
    this.addOrder(order);
  }
  statusReady(order: Ordered) {
    this.deleteOrder(order);
    order.status = 'Fertig zur Abholung';
    this.addOrder(order);
  }

  updatePickUpTime(order: Ordered) {
    if (this.date && this.time) {
      this.deleteOrder(order);
      order.pickupTime = this.date.toString() + ' ' + this.time.toString();
      this.addOrder(order);
      this.date = '';
      this.time = '';
    } else {
      alert('Bitte Zeit und Datum angeben');
    }
  }
}
