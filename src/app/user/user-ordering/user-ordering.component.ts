import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dish } from 'src/app/model/dish';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-user-ordering',
  templateUrl: './user-ordering.component.html',
  styleUrls: ['./user-ordering.component.css'],
})
export class UserOrderingComponent implements OnInit {
  card: Dish[] = [];
  cardCounter: number = 0;
  dishList: Dish[] = [];
  dishObj: Dish = {
    id: '',
    name: '',
    price: '',
    description: '',
    pictureLink: '',
  };

  constructor(
    private auth: AuthService,
    private data: DataService,
    private router: Router
  ) {}

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
    this.card.push(dish);
    console.log(this.card);
    this.cardCounter += 1;
  }

  writeCard() {
    localStorage.setItem('card', JSON.stringify(this.card));
    this.router.navigate(['shopping-card']);
  }
}
