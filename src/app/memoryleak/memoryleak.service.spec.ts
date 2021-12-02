import { TestBed } from '@angular/core/testing';

import { MemoryleakService } from './memoryleak.service';

describe('MemoryleakService', () => {
  let service: MemoryleakService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MemoryleakService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
