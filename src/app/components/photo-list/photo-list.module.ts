import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PhotoBoardModule } from 'src/app/shared/components/photo-board/photo-board.module';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { PhotoListComponent } from './photo-list.component';

@NgModule({
  declarations: [PhotoListComponent],
  imports: [
    CommonModule,
    PhotoBoardModule,
    FontAwesomeModule
  ],
  providers: [PhotoBoardService]
})
export class PhotoListModule {

}
