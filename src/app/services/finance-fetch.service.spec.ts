import { TestBed } from '@angular/core/testing';

import { FinanceFetchService } from './finance-fetch.service';

describe('FinanceFetchService', () => {
  let service: FinanceFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FinanceFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
