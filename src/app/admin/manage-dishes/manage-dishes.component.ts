import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { AuthService } from 'src/app/shared/auth.service';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-manage-dishes',
  templateUrl: './manage-dishes.component.html',
  styleUrls: ['./manage-dishes.component.css'],
})
export class ManageDishesComponent implements OnInit {
  dishList: Dish[] = [];
  dishObj: Dish = {
    id: '',
    name: '',
    price: '',
    description: '',
    pictureLink: '',
  };
  id: string = '';
  name: string = '';
  price: string = '';
  description: string = '';
  pictureLink: string = '';

  constructor(private data: DataService) {}

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

  resetForm() {
    this.id = '';
    this.name = '';
    this.price = '';
    this.description = '';
    this.pictureLink = '';
  }

  addDish() {
    if (
      this.name == '' ||
      this.price == '' ||
      this.description == '' ||
      this.pictureLink == ''
    ) {
      alert('Bitte alle Felder ausfüllen');
      return;
    }
    this.dishObj.id = '';
    this.dishObj.name = this.name;
    this.dishObj.price = this.price;
    this.dishObj.description = this.description;
    this.dishObj.pictureLink = this.pictureLink;

    this.data.addDish(this.dishObj);
    this.resetForm();
  }

  deleteDish(dish: Dish) {
    if (
      window.confirm('Willst du dieses Gericht löschen: ' + dish.name + '?')
    ) {
      this.data.deleteDish(dish);
    }
  }
}
