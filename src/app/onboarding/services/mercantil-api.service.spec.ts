import { TestBed } from '@angular/core/testing';

import { MercantilApiService } from './mercantil-api.service';

describe('MercantilApiService', () => {
  let service: MercantilApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercantilApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
