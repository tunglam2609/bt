import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.component.html',
  styleUrls: ['./lab6.component.css']
})
export class Lab6Component implements OnInit {
  btl=[
    {
        "Id": "ADAV",
        "Name": "Lập trình Android nâng cao",
        "Logo": "assets/anhbtl/ADAV.jpg"
    },
    {
        "Id": "ADBS",
        "Name": "Lập trình Android cơ bản",
        "Logo": "assets/anhbtl/ADBS.jpg"
    },
    {
        "Id": "ADTE",
        "Name": "Kiểm thử và triển khai ứng dụng Android",
        "Logo": "assets/anhbtl/ADTE.jpg"
    },
    {
        "Id": "ADUI",
        "Name": "Thiết kế giao diện trên Android",
        "Logo": "assets/anhbtl/ADUI.jpg"
    },
    {
        "Id": "ASNE",
        "Name": "Lập trình ASP.NET",
        "Logo": "assets/anhbtl/ASNE.png"
    },
    {
        "Id": "CLCO",
        "Name": "Điện toán đám mây",
        "Logo": "assets/anhbtl/CLCO.jpg"
    },
    {
        "Id": "DBAV",
        "Name": "SQL Server",
        "Logo": "assets/anhbtl/DBAV.png"
    },
    {
        "Id": "DBBS",
        "Name": "Cơ sở dữ liệu",
        "Logo": "assets/anhbtl/DBBS.png"
    },
    {
        "Id": "GAME",
        "Name": "Lập trình game 2D",
        "Logo": "assets/anhbtl/GAME.png"
    },
    {
        "Id": "HTCS",
        "Name": "HTML5 và CSS3",
        "Logo": "assets/anhbtl/HTCS.jpg"
    },
    {
        "Id": "INMA",
        "Name": "Internet Marketing",
        "Logo": "assets/anhbtl/INMA.jpg"
    },
    {
        "Id": "JAAV",
        "Name": "Lập trình Java nâng cao",
        "Logo": "assets/anhbtl/JAAV.png"
    },
    {
        "Id": "JABS",
        "Name": "Lập trình hướng đối tượng với Java",
        "Logo": "assets/anhbtl/JABS.png"
    },
    {
        "Id": "JSPR",
        "Name": "Lập trình JavaScript",
        "Logo": "assets/anhbtl/JSPR.png"
    },
    {
        "Id": "LAYO",
        "Name": "Thiết kế layout",
        "Logo": "assets/anhbtl/LAYO.jpg"
    },
    {
        "Id": "MOWE",
        "Name": "Thiết kế web cho điện thoại di động",
        "Logo": "assets/anhbtl/MOWE.png"
    },
    {
        "Id": "PHPP",
        "Name": "Lập trình PHP",
        "Logo": "assets/anhbtl/PHPP.png"
    },
    {
        "Id": "PMAG",
        "Name": "Quản lý dự án với Agile",
        "Logo": "assets/anhbtl/PMAG.jpg"
    },
    {
        "Id": "VBPR",
        "Name": "Lập trình VB.NET",
        "Logo": "assets/anhbtl/VBPR.png"
    },
    {
        "Id": "WEBU",
        "Name": "Xây dựng trang web",
        "Logo": "assets/anhbtl/WEBU.jpg"
    }
]
  constructor() { }

  ngOnInit() {
  }

}
