import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';
import { Ordered } from 'src/app/model/ordered'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
orderedList: Ordered[] = [];
orderedObj: Ordered = {
  username: '',
  orderTime: '',
  orderedDishes: '',
  totalPrice: '',
  pickupTime: '',
  accept: false,
};
username: string = 'wiet';
orderTime: string = '20230310111923';
orderedDishes: string = 'Döner, Döner, Pizza';
totalPrice: string = '32€';
pickupTime: string = '20230312213812';
accept: boolean = false;


constructor(private data: DataService){}

ngOnInit(): void {
  // this.getAllOrdered();
}

// getAllOrdered() {
//   this.data.
// }

// deleteOrdered(ordered: Ordered) {

// }

}
