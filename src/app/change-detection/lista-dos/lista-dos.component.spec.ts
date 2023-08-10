import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDosComponent } from './lista-dos.component';

describe('ListaDosComponent', () => {
  let component: ListaDosComponent;
  let fixture: ComponentFixture<ListaDosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaDosComponent]
    });
    fixture = TestBed.createComponent(ListaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
