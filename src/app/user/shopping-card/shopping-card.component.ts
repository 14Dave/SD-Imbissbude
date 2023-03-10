import { Component, OnInit } from '@angular/core';
import { Dish } from 'src/app/model/dish';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-shopping-card',
  templateUrl: './shopping-card.component.html',
  styleUrls: ['./shopping-card.component.css'],
})
export class ShoppingCardComponent implements OnInit {
  items!: Dish[];
  constructor(private data: DataService) {}
  ngOnInit() {
    const card = localStorage.getItem('card');

    if (card) {
      this.items = JSON.parse(card);
    }
  }

  buy() {
    this.items.forEach((item) => {
      this.data.addToCard(item);
    });
  }
}
