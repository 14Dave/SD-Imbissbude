import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dish-card',
  templateUrl: './dish-card.component.html',
  styleUrls: ['./dish-card.component.css'],
})
export class DishCardComponent {
  @Input() name: string = '';
  @Input() price: string = '';
  @Input() description: string = '';
  @Input() pictureLink: string = '';
}
