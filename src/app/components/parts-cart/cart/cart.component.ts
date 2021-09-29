import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service'
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  // cartItems = [
  //   { id: 1, proudctId: 1, productName: 'P1', qty: 4, price: 100 },
  //   { id: 2, proudctId: 3, productName: 'P3', qty: 5, price: 50 },
  //   { id: 3, proudctId: 2, productName: 'P2', qty: 3, price: 150 },
  //   { id: 4, proudctId: 4, productName: 'P4', qty: 2, price: 200 },
  //   ];

    cartItems = [] as IItem[];

  cartTotal = 0

  constructor(private msg: MessengerService) { }
  ngOnInit() {
    this.msg.getMsg().subscribe((productItem:any)=>{
      this.addProductToCart(productItem)
    })
  }

  addProductToCart(product: Product) {

    let productExists = false

    for (let i in this.cartItems) {
      if (this.cartItems[i].productId === product.id) {
        this.cartItems[i].qty++
        productExists = true
        break;
      }
    }

    if (!productExists) {
      this.cartItems.push({
        productId: product.id,
        productName: product.name,
        qty: 1,
        price: product.price
      })
    }
    // if (this.cartItems.length === 0) {
    //   this.cartItems.push({
    //     productId: product.id,
    //     productName: product.name,
    //     qty: 1,
    //     price: product.price
    //   })
    // } else {
    //   for (let i in this.cartItems) {
    //     if (this.cartItems[i].productId === product.id) {
    //       this.cartItems[i].qty++
    //     } else {
    //       this.cartItems.push({
    //         productId: product.id,
    //         productName: product.name,
    //         qty: 1,
    //         price: product.price
    //       })
    //     }
    //   }
    // }
  
      this.cartItems.forEach(item => {
        this.cartTotal += (item.qty * item.price)

    })
  
  }
}


interface IItem{
  productId: number, 
  productName:string, 
  qty: number, 
  price: number
}