import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-ordered-card',
  templateUrl: './ordered-card.component.html',
  styleUrls: ['./ordered-card.component.css']
})
export class OrderedCardComponent {
@Input() email: string = '';
@Input() orderTime: string = '';
@Input() orderedDishes: string[] = [];
@Input() pickupTime: string = '';
@Input() totalPrice: string ='';
@Output() status: string = '';

// acceptOrdered() {
//   this.accept = true;
// }

// declineOrdered() {
//   this.accept = false;
// }
}