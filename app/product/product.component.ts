import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
list=[{
  "image":"assets/anh1.jpg",
  "product":"leaf rake",
  "code":"gdn-0011",
  "available":"march 19,2016",
  "price":"$19.95",
  "starRating":"4.8"
},{
  "image":"assets/anh2.jpg",
  "product":"leaf rake",
  "code":"gdn-0011",
  "available":"march 18,2016",
  "price":"$32.99",

},{
  "image":"assets/anh3.jpg",
  "product":"hammer",
  "code":"tbx-0048",
  "available":"march 21,2016",
  "price":"$8.90",
}]
image=true
anhien(){
  this.image=!this.image
}
  constructor() { }

  ngOnInit() {
  }

}
