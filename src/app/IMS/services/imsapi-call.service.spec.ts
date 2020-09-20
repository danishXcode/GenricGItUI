import { TestBed } from '@angular/core/testing';

import { IMSApiCallService } from './imsapi-call.service';

describe('IMSApiCallService', () => {
  let service: IMSApiCallService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IMSApiCallService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
