import { Injectable } from '@angular/core';
import { Product } from '../models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products:Product[]=[
    new Product(1,'Brake pads','Safety guaranteed brake pads. with high performance',800),
    new Product(2,'Brake pads','Safety guaranteed brake pads',900,),
    new Product(3,'Brake pads','Safety guaranteed brake pads',500),
    new Product(4,'Brake pads','Safety guaranteed brake pads',700),
    new Product(5,'Brake pads','Safety guaranteed brake pads',800),
    new Product(6,'Brake pads','Safety guaranteed brake pads',600),
    new Product(7,'Brake pads','Safety guaranteed brake pads',800),
    new Product(8,'Brake pads','Safety guaranteed brake pads',1000),
  ]

  constructor() { }

  getProducts():Product[]{
    return this.products
  }
}
