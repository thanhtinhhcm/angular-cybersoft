import { TestBed } from '@angular/core/testing';

import { ThongTinNguoiDungService } from './thong-tin-nguoi-dung.service';

describe('ThongTinNguoiDungService', () => {
  let service: ThongTinNguoiDungService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ThongTinNguoiDungService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
