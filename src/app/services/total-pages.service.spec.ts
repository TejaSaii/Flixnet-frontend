import { TestBed } from '@angular/core/testing';

import { TotalPagesService } from './total-pages.service';

describe('TotalPagesService', () => {
  let service: TotalPagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TotalPagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
