import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss']
})
export class ComboComponent implements OnInit {
@Input() combo;
@Output() evttru = new EventEmitter();
@Output() evttang = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  botcombo() {
    this.evttru.emit(this.combo.id);
  }
  themcombo() {
    this.evttang.emit(this.combo.id);
  }
}
