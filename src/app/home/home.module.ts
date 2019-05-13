import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HomeComponent } from './home.component';
import { from } from 'rxjs';
import { HeaderComponent } from './trang-chu/header/header.component';
import { CarouselComponent } from './trang-chu/carousel/carousel.component';
import { OwlModule } from 'ngx-owl-carousel';
import { ContentTabComponent } from './trang-chu/content-tab/content-tab.component';
import { SharedModule } from '../shared/shared.module';
import { FooterComponent } from './trang-chu/footer/footer.component';
import { DetailMovieComponent } from './trang-chu/detail-movie/detail-movie.component';
import { TimeOfMovieComponent } from './trang-chu/detail-movie/time-of-movie/time-of-movie.component';
import { OrderTicketsComponent } from './trang-chu/detail-movie/time-of-movie/order-tickets/order-tickets.component';
import { DanhSachGheComponent } from './trang-chu/detail-movie/time-of-movie/danh-sach-ghe/danh-sach-ghe.component';
import { GheComponent } from './trang-chu/detail-movie/time-of-movie/danh-sach-ghe/ghe/ghe.component';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, HeaderComponent, CarouselComponent, ContentTabComponent, FooterComponent, DetailMovieComponent, TimeOfMovieComponent, OrderTicketsComponent, DanhSachGheComponent, GheComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, OwlModule, SharedModule
  ]
})
export class HomeModule { }
