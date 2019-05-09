import { Component, OnInit, OnDestroy } from '@angular/core';
import { QuanlyphimService } from 'src/app/_cores/services/quanlyphim.service';
import { Subscription} from 'rxjs';
@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit, OnDestroy {
  subService: Subscription;
  dsPhim: any[] = [];
  // myCarouselImages: any[] = [];
  constructor(private qlyPhim: QuanlyphimService) { }
  // This is to generate random placeholder images
  // tslint:disable-next-line:member-ordering
  // mySlideImages = [1, 2, 3].map((i) => `https://picsum.photos/640/480?image=${i}`);
  // tslint:disable-next-line:member-ordering
  myCarouselImages = [1, 2, 3, 4, 5, 6].map((i) => `./assets/img/${i}.jpg`);
  // tslint:disable-next-line:member-ordering
  // mySlideOptions = {items: 1, dots: true, nav: false};
  myCarouselOptions = {items: 3, dots: true, nav: true, loop: true, autoplay: true};

  ngOnInit() {
    this.subService = this.qlyPhim.LayDanhSachPhim()
      .subscribe((ketqua) => {
        this.dsPhim = ketqua;
        // for (const phim of this.dsPhim) {
        //   if (this.myCarouselImages.length < 6) {
        //     this.myCarouselImages.push( phim.HinhAnh );
        //   }
        // }
        // this.myCarouselOptions = {items: 3, dots: true, nav: true, loop: true};
      }, (loi) => {
        console.log(loi);
      });
  }
  ngOnDestroy() {
    this.subService.unsubscribe(); // Hủy theo dõi biến observable
  }
}
