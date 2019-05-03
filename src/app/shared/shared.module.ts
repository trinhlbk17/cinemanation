import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SlicetextPipe } from './pipe/slicetext.pipe';

@NgModule({
  declarations: [SlicetextPipe],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [
    SlicetextPipe, FormsModule
  ]
})
export class SharedModule { }
