import { TestBed } from '@angular/core/testing';

import { JsonReadServiceService } from './json-read-service.service';

describe('JsonReadServiceService', () => {
  let service: JsonReadServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsonReadServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
