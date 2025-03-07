import { Component } from '@angular/core';
import { ProductsService } from '../products.service';
import { Router } from '@angular/router';
import { RestService } from '../rest.service';

@Component({
  selector: 'app-products',
  standalone: false,
  
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  constructor(private prodService : ProductsService, private router : Router, private rest : RestService){}

  // prodLst=[
  //   {"productId": 101, "productName":"Tv",              "description":"Samsung TV",         "cost":55000},
  //   {"productId": 102, "productName":"Mobile",          "description":"Samsung Mobile",     "cost":35000},
  //   {"productId": 103, "productName":"Washing Machine", "description":"LG Washing Machine", "cost":55000},
  //   {"productId": 104, "productName":"Mixer",           "description":"Butterfly Mixer",    "cost":5000},
  //   {"productId": 105, "productName":"AC",              "description":"BlueStar AC",        "cost":35000}
  // ]

  productLst=[
    {"productId": 101, "productName":"Tom And Jerry",              "episodes":12,         "source":"Youtube"},
    {"productId": 102, "productName":"Doraemon",          "episodes":12,     "source":"Youtube"},
    {"productId": 103, "productName":"Dora & Bujji", "episodes":12, "source":"Youtube"},
    {"productId": 104, "productName":"Motu And Patlu",           "episodes":12,    "source":"Youtube"}
  ]

// prodLst1 : any;
displayProductsData = false;
carLst : any;
displayProductData(){
  // this.prodLst1 = this.prodService.getAllProductsFromService();
  this.displayProductsData=true;
  this.rest.getAllCartoonsFromService().subscribe({
    next : (data) => {this.carLst=data;},
    error : (err) => alert (err),
    complete : () => console.log("Fetching data from server is complete....")
  })
}

buyProductData(product : any){
  // alert("You have buying the Product : "+JSON.stringify(product));
  // const prod = JSON.stringify(product);
  // alert("Sending data buying the Product : "+JSON.stringify(product));
  this.router.navigate(['/buying'], {state: {product}});
}

}
