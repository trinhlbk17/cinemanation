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
import { ShareModule } from '../shared/shared.module';

@NgModule({
  declarations: [HomeComponent, TrangChuComponent, HeaderComponent, CarouselComponent, ContentTabComponent],
  imports: [
    CommonModule,
    HomeRoutingModule, OwlModule, ShareModule
  ]
})
export class HomeModule { }
