import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserOrderviewComponent } from './user-orderview.component';

describe('UserOrderviewComponent', () => {
  let component: UserOrderviewComponent;
  let fixture: ComponentFixture<UserOrderviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserOrderviewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserOrderviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
