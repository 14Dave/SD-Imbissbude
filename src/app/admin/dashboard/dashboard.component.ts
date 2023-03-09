import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// orderedList: Ordered[] = [];
// orderedObj: Ordered = {
//   username: '',
//   orderedDishes: '',
//   pickupTime: '',
// };
// username: string = 'wiet';
// orderedDishes: string = 'Döner, Döner, Pizza';
// pickupTime: string = '20230308213812';
// accept: boolean = false;


// constructor(private data: DataService){}

ngOnInit(): void {
  // this.getAllOrdered();
}

// getAllOrdered() {
//   this.data.
// }

// deleteOrdered(ordered: Ordered) {

// }

}
