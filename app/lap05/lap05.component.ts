import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lap05',
  templateUrl: './lap05.component.html',
  styleUrls: ['./lap05.component.css']
})
export class Lap05Component implements OnInit {
  students = [
    {"ID":1,"FirstMidName": "Carson", "LastName":"Alexander", "EnrollmentDate":"2005-09-01" },
    {"ID":2,"FirstMidName":"Meredith","LastName":"Alonso", "EnrollmentDate": "2002-09-01" },
    {"ID":3,"FirstMidName":"Gytis", "LastName":"Barzdukas", "EnrollmentDate":"2002-09-01" },
    {"ID":4,"FirstMidName":"Yan", "LastName":"Li", "EnrollmentDate":"2002-09-01" },
    {"ID":5,"FirstMidName":"Peggy", "LastName":"Justice", "EnrollmentDate":"2001-09-01" },
    {"ID":6,"FirstMidName":"Laura", "LastName":"Norman", "EnrollmentDate":"2003-09-01" },
    {"ID":7,"FirstMidName":"Nino", "LastName":"Olivetto","EnrollmentDate":"2005-09-01" }
  ];

  p: number = 1;
  constructor() { }

  ngOnInit() {
  }

}
