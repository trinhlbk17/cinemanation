import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-danh-sach-ghe',
  templateUrl: './danh-sach-ghe.component.html',
  styleUrls: ['./danh-sach-ghe.component.scss']
})
export class DanhSachGheComponent implements OnInit {
  subParam: Subscription;
  subService: Subscription;
  gio = 0;
  constructor(
    private avtRoute: ActivatedRoute, // ActivatedRoute: là đối tượng dùng để lấy tham số từ URL (get params url)
  ) { }

  ngOnInit() {
    this.subParam =  this.avtRoute.params.subscribe((thamso: any) => {
      // Lấy tham số từ url thông qua thuộc tính params
       this.gio = thamso.gio;
       console.log(this.gio);
  });

  }
}
