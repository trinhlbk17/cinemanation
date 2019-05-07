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

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, HeaderComponent, CarouselComponent, ContentTabComponent, FooterComponent, DetailMovieComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, OwlModule, SharedModule
  ]
})
export class HomeModule { }
