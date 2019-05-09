import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuanlyphimService } from 'src/app/_cores/services/quanlyphim.service';
import { Subscription } from 'rxjs';
import { and } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss']
})
export class DetailMovieComponent implements OnInit, OnDestroy {
  subParam: Subscription;
  subService: Subscription;
  maPhim = 0;
  trangthai = true;
  phim: any = {};
  ngaytrongtuan: any =  [2 , 3, 4, 5 , 6 , 7, 8 ];
  giotrongngay: any =  [10 , 14, 15 , 18 , 20 , 22 , 23 ];
  constructor(
    private avtRoute: ActivatedRoute, // ActivatedRoute: là đối tượng dùng để lấy tham số từ URL (get params url)
    private qlyPhimService: QuanlyphimService
  ) { }
date: any;
hour: any;
  ngOnInit() {
    this.subParam =  this.avtRoute.params.subscribe((thamso: any) => {
      // Lấy tham số từ url thông qua thuộc tính params
       this.maPhim = thamso.maphim;
       // Gọi phương thức lấy thông tin phim
       this.LayChiTietPhim(thamso.maphim);
     });
    this.date = new Date().getDay();
    this.hour = new Date().getHours();
    console.log(this.date);
  }
  // Xây dựng phương thức lấy thông tin phim từ api
  LayChiTietPhim(maPhim: number) {
    this.subService = this.qlyPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
      this.phim = ketqua;
      console.log(this.phim);
    });
  }
  setngay() {
    for(const ngay of this.ngaytrongtuan){
      for(const gio of this.giotrongngay){
        if(this.date === ngay - 1 && this.hour > gio){
            this.trangthai = false;
      }
      }
    }
  }
  ngOnDestroy() {
    this.subParam.unsubscribe();
    this.subService.unsubscribe();
  }
}
