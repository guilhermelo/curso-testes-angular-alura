import { TestBed } from '@angular/core/testing';
import { PhotoBoardService } from './photo-board.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

const mockedData = {
  api: 'http://localhost:3000/photos',
  data: [
    {
      id: 1,
      description: 'Example 1',
      src: ''
    },
    {
      id: 2,
      description: 'Example 2',
      src: ''
    }
  ]
};

describe(PhotoBoardService.name, () => {

  let service: PhotoBoardService;
  let httpController: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhotoBoardService]
    }).compileComponents();

    service = TestBed.inject(PhotoBoardService);
    httpController = TestBed.inject(HttpTestingController);
  });

  // Verifica se tem alguma requisição que não dei uma resposta
  afterEach(() => httpController.verify());


  it(`#{PhotoBoardService.prototype.getPhotos.name} should return photos with description in uppercase`, done => {

    service.getPhotos().subscribe(photos => {
      expect(photos[0].description).toBe('EXAMPLE 1');
      expect(photos[1].description).toBe('EXAMPLE 2');
      done();
    });

    // se requisição for feita para essa api, vai retornar os dados mocados
    httpController.expectOne(mockedData.api).flush(mockedData.data);
  });
});
