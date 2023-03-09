import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderedCardComponent } from './ordered-card.component';

describe('OrderedCardComponent', () => {
  let component: OrderedCardComponent;
  let fixture: ComponentFixture<OrderedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
