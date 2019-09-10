import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap03',
  templateUrl: './lap03.component.html',
  styleUrls: ['./lap03.component.css']
})
export class Lap03Component implements OnInit {
  ppp=[{
    "fullName":"Nguyễn Thị Tèo",
    "birthday":"20-01-1999",
    "gender" :"Nữ",
    "photo" :"assets/aanh1.jpg",
    "mark":"6.4"
  },{
    "fullName":"Nguyễn Văn kinh",
    "birthday":"20-01-2000",
    "gender" :"Nam",
    "photo" :"assets/aanh2.jpg",
    "mark":"6.4"
  },{
    "fullName":"lê thị dần",
    "birthday":"02-05-1998",
    "gender" :"Nữ",
    "photo" :"assets/aanh3.jpg",
    "mark":"6.4"}
  
  ]

  constructor() { }

  ngOnInit() {
  }

}
