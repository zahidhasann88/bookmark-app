import { TestBed } from '@angular/core/testing';

import { UtlityService } from './utlity.service';

describe('UtlityService', () => {
  let service: UtlityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UtlityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
