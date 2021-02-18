import { TestBed } from '@angular/core/testing';

import { MercantilMockApiService } from './mercantil-mock-api.service';

describe('MercantilMockApiService', () => {
  let service: MercantilMockApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MercantilMockApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
