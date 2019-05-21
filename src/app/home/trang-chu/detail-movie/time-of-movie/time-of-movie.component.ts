import { Component, OnInit, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { QuanlyphimService } from 'src/app/_cores/services/quanlyphim.service';

@Component({
  selector: 'app-time-of-movie',
  templateUrl: './time-of-movie.component.html',
  styleUrls: ['./time-of-movie.component.scss']
})
export class TimeOfMovieComponent implements OnInit {
  @Input() ngay6;
  subParam: Subscription;
  subService: Subscription;
  maPhim: any;
  dsgioo: any = {};
  gioo: number;
  phim: any = {};
  constructor(
    private avtRoute: ActivatedRoute, // ActivatedRoute: là đối tượng dùng để lấy tham số từ URL (get params url)
    private qlyPhimService: QuanlyphimService
  ) { }
  date: any;
  hour: any;
  ngOnInit() {
    this.date = new Date().getDay();
    this.hour = new Date().getHours();
    this.subParam =  this.avtRoute.params.subscribe((thamso: any) => {
      // Lấy tham số từ url thông qua thuộc tính params
    this.maPhim = thamso.maphim;
    console.log(this.hour);
    this.LayChiTietPhim(this.maPhim);
    // this.gioo = this.phim.LichChieu.NgayChieuGioChieu.getHours();
    
  });
}
// Xây dựng phương thức lấy thông tin phim từ api
LayChiTietPhim(maPhim: number) {
  this.subService = this.qlyPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
    this.phim = ketqua;
    this.dsgioo = this.phim.LichChieu;
    for(let malich of this.dsgioo) {
      if(malich.MaLichChieu === this.ngay6) {
        this.gioo = malich.NgayChieuGioChieu.substring(11, 13);
        console.log("gio: " + this.gioo);
        break;
      }
    }
  });
}
  setanhien(gio): boolean {
    if (this.ngay6 === this.date + 1) {
          if (gio <= this.hour) {
            return true;
          } else {
            return false;
          }
    }

  }
}
