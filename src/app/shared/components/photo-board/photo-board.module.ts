import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoFrameModule } from '../photo-frame/photo-frame.module';
import { PhotoBoardComponent } from './photo-board.component';

@NgModule({
  imports: [CommonModule, PhotoFrameModule],
  declarations: [PhotoBoardComponent],
  exports: [PhotoBoardComponent]
})
export class PhotoBoardModule {

}
