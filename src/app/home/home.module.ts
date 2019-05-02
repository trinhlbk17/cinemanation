import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { TrangChuComponent } from './trang-chu/trang-chu.component';
import { HomeComponent } from './home.component';
import { from } from 'rxjs';
import { HeaderComponent } from './trang-chu/header/header.component';
@NgModule({
  declarations: [HomeComponent, TrangChuComponent, HeaderComponent],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
