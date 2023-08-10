import { Component } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-nav-bar-cart',
  templateUrl: './nav-bar-cart.component.html',
  styleUrls: ['./nav-bar-cart.component.css']
})
export class NavBarCartComponent {
  displayMenu: string;
  myCart$ = this.storeService.myCart$;

  constructor(private storeService: StoreService) {
    this.displayMenu = 'none';
    //this.myCart$.subscribe(data=>console.log(data));
  }
}
