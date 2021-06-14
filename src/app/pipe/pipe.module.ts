import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShortCutPipe } from './short-cut.pipe';
import { SafePipePipe } from './safe-pipe.pipe';



@NgModule({
  declarations: [
    ShortCutPipe,
    SafePipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ShortCutPipe, SafePipePipe]
})
export class PipeModule { }
