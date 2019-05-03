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
  constructor(private qlyPhim: AuthService) { }

  ngOnInit() {
    this.subService = this.qlyPhim.LayDanhSachPhim()
      .subscribe((ketqua) => {
        console.log(ketqua);
        this.dsPhim = ketqua;
      }, (loi) => {
        console.log(loi);
      });
  }
  ngOnDestroy() {
    this.subService.unsubscribe(); // Hủy theo dõi biến observable
  }
}
