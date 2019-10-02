import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lab01',
  templateUrl: './lab01.component.html',
  styleUrls: ['./lab01.component.css']
})
export class Lab01Component implements OnInit {
  products=[{"nhomSanPham":1,"Name":"Dien thoai di dong"},
            {"nhomSanPham":2,"Name":"May tinh xach tay"},
            {"nhomSanPham":3,"Name":"May tinh de ban"},
            {"nhomSanPham":4,"Name":"Quat may"},
            {"nhomSanPham":5,"Name":"Smart Tivi"},]

  productDetails=[{"nhomSanPham":1,"maSanPham":1,"tenSanPham":"Nokia 1280","gia":"$100","nhaCungCap":"Nokia","chungLoai":"Dien thoai di dong","tinhTrang":"Hang Moi","slTon":5,"giamGia":"5%"},
                  {"nhomSanPham":1,"maSanPham":2,"tenSanPham":"Nokia XS","gia":"$299","nhaCungCap":"Nokia","chungLoai":"Dien thoai di dong","tinhTrang":"Hang Moi","slTon":5,"giamGia":"10%"},
                  {"nhomSanPham":1,"maSanPham":3,"tenSanPham":"Nokia XS Max","gia":"$999","nhaCungCap":"Nokia","chungLoai":"Dien thoai di dong","tinhTrang":"Hang Moi","slTon":5,"giamGia":"15%"},
                  {"nhomSanPham":2,"maSanPham":1,"tenSanPham":"Asus RTX 2060","gia":"$100","nhaCungCap":"Asus","chungLoai":"May tinh xach tay","tinhTrang":"Hang Moi","slTon":5,"giamGia":"5%"},
                  {"nhomSanPham":2,"maSanPham":2,"tenSanPham":"Hp GTX 1080","gia":"$100","nhaCungCap":"Hp","chungLoai":"May tinh xach tay","tinhTrang":"Hang Moi","slTon":5,"giamGia":"5%"},
                  {"nhomSanPham":2,"maSanPham":3,"tenSanPham":"Macbook Pro","gia":"$100","nhaCungCap":"Apple","chungLoai":"May tinh xach tay","tinhTrang":"Hang Moi","slTon":5,"giamGia":"5%"},
                  {"nhomSanPham":2,"maSanPham":3,"tenSanPham":"Macbook Pro","gia":"$100","nhaCungCap":"Apple","chungLoai":"May tinh xach tay","tinhTrang":"Hang Moi","slTon":5,"giamGia":"5%"},]

  constructor(private route: ActivatedRoute) { }
nhomsp;
product;
productDetail;
  ngOnInit() {
    this.route.paramMap.subscribe(param=>
      this.nhomsp=+param.get("nhomSanPham"))
      this.product=this.products.find(item=>item.nhomSanPham==this.nhomsp)
      this.productDetail=this.productDetails.filter(item=>item.nhomSanPham==this.nhomsp)
  }

}
