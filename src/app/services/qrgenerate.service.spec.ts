import { TestBed } from '@angular/core/testing';

import { QrgenerateService } from './qrgenerate.service';

describe('QrgenerateService', () => {
  let service: QrgenerateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QrgenerateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
