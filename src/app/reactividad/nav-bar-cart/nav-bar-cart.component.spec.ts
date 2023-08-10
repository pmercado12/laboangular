import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarCartComponent } from './nav-bar-cart.component';

describe('NavBarCartComponent', () => {
  let component: NavBarCartComponent;
  let fixture: ComponentFixture<NavBarCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavBarCartComponent]
    });
    fixture = TestBed.createComponent(NavBarCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
