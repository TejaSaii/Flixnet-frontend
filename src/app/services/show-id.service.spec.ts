import { TestBed } from '@angular/core/testing';

import { ShowIdService } from './show-id.service';

describe('ShowIdService', () => {
  let service: ShowIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
