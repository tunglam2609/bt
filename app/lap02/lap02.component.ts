import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap02',
  templateUrl: './lap02.component.html',
  styleUrls: ['./lap02.component.css']
})
export class Lap02Component implements OnInit {
  sss= {
    "fullName":"Nguyễn Văn Tèo",
    "birthday":"20-01-1999",
    "gender" :"Nữ",
    "photo" :"assets/aanh1.jpg",
    "mark":"6.4"
    }
  constructor() { }

  ngOnInit() {
  }

}
