import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css'],
})
export class UserDashboardComponent implements OnInit {
  dishList: Dish[] = [];
  dishObj: Dish = {
    id: '',
    name: '',
    price: '',
    description: '',
    pictureLink: '',
  };
  keys: number[] = [];
  key: number = 0;

  constructor(private auth: AuthService, private data: DataService) {}

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes() {
    this.data.getAllDishes().subscribe(
      (res) => {
        this.dishList = res.map((e: any) => {
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

  addToCard(dish: Dish) {
    localStorage.setItem(this.key.toString(), dish.id);
    this.key += 1;
  }
}
