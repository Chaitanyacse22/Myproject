import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  // productLst=[
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

  getAllProductsFromService(){
    return this.productLst;
  }
}
