import { TestBed } from '@angular/core/testing';

import { ApiMilkCalcService } from './api-milk-calc.service';

describe('ApiMilkCalcService', () => {
  let service: ApiMilkCalcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiMilkCalcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
