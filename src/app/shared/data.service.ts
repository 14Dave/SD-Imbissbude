import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dish } from '../model/dish';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}

  addDish(dish: Dish) {
    dish.id = this.db.createId();
    return this.db.collection('/Dishes').add(dish);
  }

  getAllDishes() {
    return this.db.collection('/Dishes').snapshotChanges();
  }

  deleteDish(dish: Dish) {
    return this.db.doc('/Gerichte/' + dish.id).delete();
  }

  updateGericht(dish: Dish) {
    this.deleteDish(dish);
    this.addDish(dish);
  }

  addToOrder = async (dish: Dish[], email: string) => {
    const ref = await this.db.collection(email).add(dish);
  };
}
