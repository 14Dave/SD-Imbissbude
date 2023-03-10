import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Dish } from '../model/dish';
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
} from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private db: AngularFirestore) {}
  database = getFirestore();
  doc: any;
  user = localStorage.getItem('user');
  userData: any = '';
  userEmail: string = '';
  if(user: any) {
    this.userData = JSON.parse(user);
    this.userEmail = this.userData.email;
    // this.doc = addDoc(this.database, this.userEmail);
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

  addToCard = (dish: Dish) => {
    dish.id = this.db.createId();
    console.log(dish);

    // const cardRef = doc(this.database, this.userEmail, dish);
    // return this.db.collection(this.userEmail).add(dish);
  };
}
