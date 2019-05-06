import { Component, OnInit, OnDestroy } from '@angular/core';
// import { AuthService } from 'src/app/_cores/services/auth.service';
import { QuanlyphimService } from 'src/app/_cores/services/quanlyphim.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-content-tab',
  templateUrl: './content-tab.component.html',
  styleUrls: ['./content-tab.component.scss']
})
export class ContentTabComponent implements OnInit, OnDestroy {
  subService: Subscription;
  dsPhim: any[] = [];
  dsPhim15: any[] = [];
  dsPhimSapChieu: any[] = [];
  booleanPhim = false;
  booleanPhim15 = true;
  dangchieu = true;
  sapchieu = false;
  xem = 'Xem Tiep';
  constructor(private qlyPhim: QuanlyphimService) { }
  xemthem() {
      this.booleanPhim = !this.booleanPhim;
      this.booleanPhim15 = !this.booleanPhim15;
      if ( this.booleanPhim15 === true) {
        this.xem = 'Xem Tiep';
      } else {
        this.xem = 'Thu Gon';
      }
  }
  Activedangchieu() {
    if (this.dangchieu === false) {
      this.dangchieu = true;
      this.sapchieu = false;
    }
  }
  Activesapchieu() {
    if (this.sapchieu === false) {
      this.sapchieu = true;
      this.dangchieu = false;
    }
  }
  ngOnInit() {
    this.subService = this.qlyPhim.LayDanhSachPhim()
      .subscribe((ketqua) => {
        console.log(ketqua);
        this.dsPhim = ketqua;
        if ( this.dsPhim.length > 9) {
          for (let i = 0; i < 9; i++) {
              this.dsPhim15.push(this.dsPhim[i]);
          }
        } else { this.booleanPhim = true; }
      }, (loi) => {
        console.log(loi);
      });

    this.subService = this.qlyPhim.LayDanhSachPhim_sapchieu()
      .subscribe((ketquasc) => {
        if ( ketquasc.length > 11) {
          for (let i = 2; i < 11; i++) {
              this.dsPhimSapChieu.push(ketquasc[i]);
          }
        } else { this.dsPhimSapChieu = ketquasc; }
      }, (loi) => {
        console.log(loi);
    });
  }
  ngOnDestroy() {
    this.subService.unsubscribe(); // Hủy theo dõi biến observable
  }
}
