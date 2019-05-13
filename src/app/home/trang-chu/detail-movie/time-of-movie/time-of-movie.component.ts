import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-time-of-movie',
  templateUrl: './time-of-movie.component.html',
  styleUrls: ['./time-of-movie.component.scss']
})
export class TimeOfMovieComponent implements OnInit {
  giotrongngay: any =  [10 , 14, 15 , 18 , 20 , 22 , 23 ];
  @Input() ngay6;

  constructor() { }
  date: any;
  hour: any;
  ngOnInit() {
    this.date = new Date().getDay();
    this.hour = new Date().getHours();
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