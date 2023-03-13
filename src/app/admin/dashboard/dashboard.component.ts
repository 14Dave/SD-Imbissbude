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
  id: '',
  email: '',
  orderTime: '',
  orderedDishes: [],
  totalPrice: '',
  pickupTime: '',
  status: '',
};
email: string = '';
orderTime: string = '';
orderedDishes: string = '';
totalPrice: string = '';
pickupTime: string = '';
status: string = '';


constructor(private data: DataService){}

ngOnInit(): void {
  this.getAllOrdered();
}

getAllOrdered() {
  this.data.getAllOrdered().subscribe(
    (res) => {
      this.orderedList = res.map((e:any) => {
        const data = e.payload.doc.data();
        data.id = e.payload.doc.id;
        return data;
      });
    },
    (err) => {
      alert(err.message);
    }
  )
}

deleteOrdered(ordered: Ordered) {
  if (
    window.confirm('Willst du diese Bestellung löschen: ' + ordered.email + ' ' + ordered.orderTime + '?')
  ) {
    this.data.deleteOrdered(ordered);
  }
}

}
