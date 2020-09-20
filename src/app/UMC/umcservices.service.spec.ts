import { TestBed } from '@angular/core/testing';

import { UMCServicesService } from './umcservices.service';

describe('UMCServicesService', () => {
  let service: UMCServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UMCServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
