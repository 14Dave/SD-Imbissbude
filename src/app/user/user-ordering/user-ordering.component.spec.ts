import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderingComponent } from './user-ordering.component';

describe('UserOrderingComponent', () => {
  let component: UserOrderingComponent;
  let fixture: ComponentFixture<UserOrderingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
