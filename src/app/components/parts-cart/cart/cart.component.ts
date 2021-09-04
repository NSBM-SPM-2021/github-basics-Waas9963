import { Component, OnInit } from '@angular/core';
import { MessengerService } from 'src/app/services/messenger.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems=[
    {id: 1,productId:1,productName:'Rods',qty:3,price:1000},
    {id: 2,productId:2,productName:'Bolts',qty:4,price:600},
    {id: 3,productId:3,productName:'Pistons',qty:2,price:900},
    {id: 4,productId:4,productName:'Bearing kit',qty:3,price:1000},
    {id: 5,productId:5,productName:'Ball joint',qty:1,price:800},
   ];
   cartTotal=0

   constructor(private msg: MessengerService){}
  ngOnInit(){
    this.cartItems.forEach(item=>{
      this.cartTotal +=(item.qty * item.price)

    })
  }

}
