import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ghe',
  templateUrl: './ghe.component.html',
  styleUrls: ['./ghe.component.scss']
})
export class GheComponent implements OnInit {
@Input() itemghe;
@Output() emitstatus = new EventEmitter();
trangthai:boolean = false;
  constructor() { }

  ngOnInit() {
  }
Datghe() {
  this.trangthai = !this.trangthai;
  this.emitstatus.emit(this.trangthai);
}
}
