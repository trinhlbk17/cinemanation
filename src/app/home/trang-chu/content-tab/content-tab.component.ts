import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/_cores/services/auth.service';
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
  booleanPhim = false;
  booleanPhim15 = true;
  constructor(private qlyPhim: AuthService) { }
  xemthem() {
    if ( this.booleanPhim === false) {
      this.booleanPhim = true;
      this.booleanPhim15 = false;
    }
  }
  ngOnInit() {
    this.subService = this.qlyPhim.LayDanhSachPhim()
      .subscribe((ketqua) => {
        console.log(ketqua);
        this.dsPhim = ketqua;
        if ( this.dsPhim.length > 15) {
          for (let i = 0; i < 15; i++) {
              this.dsPhim15.push(this.dsPhim[i]);
          }
        } else { this.booleanPhim = true; }
      }, (loi) => {
        console.log(loi);
      });
  }
  ngOnDestroy() {
    this.subService.unsubscribe(); // Hủy theo dõi biến observable
  }
}
