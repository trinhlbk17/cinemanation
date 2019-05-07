import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {TrangChuComponent} from './trang-chu/trang-chu.component';
import {HomeGuard} from '../shared/guard/home.guard';
import { DetailMovieComponent } from './trang-chu/detail-movie/detail-movie.component';

const routes: Routes = [
  {path: '', component: HomeComponent, children: [
      {path: '', component: TrangChuComponent},
      {path: 'trang-chu', component: TrangChuComponent},
      {path: 'chi-tiet-phim/:maphim', component: DetailMovieComponent}
    ]}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
