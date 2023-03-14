import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user-orderview',
  templateUrl: './user-orderview.component.html',
  styleUrls: ['./user-orderview.component.css'],
})
export class UserOrderviewComponent {
  @Input() email: string = '';
  @Input() orderTime: string = '';
  @Input() orderedDishes: string[] = [];
  @Input() totalPrice: string = '';
  @Input() pickupTime: string = '';
  @Input() status: string = '';
}
