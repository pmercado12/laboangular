import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaUnoComponent } from './lista-uno.component';

describe('ListaUnoComponent', () => {
  let component: ListaUnoComponent;
  let fixture: ComponentFixture<ListaUnoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaUnoComponent]
    });
    fixture = TestBed.createComponent(ListaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
