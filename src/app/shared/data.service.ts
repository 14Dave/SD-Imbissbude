import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dish } from '../model/dish';
import { Ordered } from '../model/ordered';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}
  user = localStorage.getItem('user');
  userData: any = '';
  userEmail: string = '';
  if(user: any) {
    this.userData = JSON.parse(user);
    this.userEmail = this.userData.email;
  }

  addDish(dish: Dish) {
    dish.id = this.db.createId();
    return this.db.collection('/Dishes').add(dish);
  }

  getAllDishes() {
    return this.db.collection('/Dishes').snapshotChanges();
  }

  deleteDish(dish: Dish) {
    return this.db.doc('/Dishes/' + dish.id).delete();
  }

  updateGericht(dish: Dish) {
    this.deleteDish(dish);
    this.addDish(dish);
  }

  addToCard = (order: Ordered) => {
    order.id = this.db.createId();
    return this.db.collection('/Card').add(order);
  };

  getCard(user: User) {
    // return this.db.doc('/Dishes/' + email).snapshotChanges();
    return this.db
      .collection('/Card', (ref) => ref.where('email', '==', user.email))
      .get();
  }

  getAllOrders() {
    return this.db.collection('/Card').snapshotChanges();
  }

  deleteOrder(order: Ordered) {
    return this.db.doc('/Card/' + order.id).delete();
  }

  updateOrder(order: Ordered) {
    this.deleteOrder(order);
    this.addToCard(order);
  }
}
