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
  gioo: any;
  phim: any = {};
  lichchieu: any;
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
    console.log("ma: "+ this.maPhim);
    this.LayChiTietPhim(this.maPhim);
  });
}
// Xây dựng phương thức lấy thông tin phim từ api
LayChiTietPhim(maPhim: number) {
  this.subService = this.qlyPhimService.LayChiTietPhim(maPhim).subscribe((ketqua) => {
    this.phim = ketqua;
    this.lichchieu = this.phim.LichChieu;
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
