import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { PhotoBoardService } from 'src/app/shared/components/photo-board/services/photo-board.service';
import { buildPhotoList } from 'src/app/shared/components/photo-board/test/build-photo-list';
import { PhotoListComponent } from './photo-list.component';
import { PhotoListModule } from './photo-list.module';

describe(PhotoListComponent.name, () => {

  let fixture: ComponentFixture<PhotoListComponent>;
  let component: PhotoListComponent;
  let photoService: PhotoBoardService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        PhotoListModule,
        HttpClientModule
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(PhotoListComponent);
    component = fixture.componentInstance;
    photoService = TestBed.inject(PhotoBoardService);
  });

  it('Should create component', () => {
    expect(component).toBeTruthy();
  });

  // it('(D) Should display board when data arrives', () => {
  //   spyOn(photoService, 'getPhotos').and.returnValue(of(buildPhotoList()));

  //   fixture.detectChanges();

  //   const board = fixture.nativeElement.querySelector('app-photo-board');
  //   const loader = fixture.nativeElement.querySelector('.loader');

  //   expect(board).withContext('Should display board').not.toBeNull();
  //   expect(loader).withContext('Should not display loader').toBeNull();

  // });

  // it('(D) Should display loader while waiting for data', () => {
  //   spyOn(photoService, 'getPhotos').and.returnValue(of(buildPhotoList()));

  //   fixture.detectChanges();

  //   const board = fixture.nativeElement.querySelector('app-photo-board');
  //   const loader = fixture.nativeElement.querySelector('.loader');

  //   expect(loader).withContext('Should not display board').toBeNull();
  //   expect(board).withContext('Should display loader').not.toBeNull();
  // });
});
