import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-buying',
  standalone: false,
  
  templateUrl: './buying.component.html',
  styleUrl: './buying.component.css'
})
export class BuyingComponent {
  product : any;
  displayData = false;
  constructor(private router : Router){
    const navigation = this.router.getCurrentNavigation();
      this.product = navigation?.extras.state?.['product'];
      console.log('Cart received in WatchList Component: ', this.product);
      this.displayData = true;
  }
}
