import { TestBed } from '@angular/core/testing';

import { RequestSourcesService } from './request-sources.service';

describe('RequestSourcesService', () => {
  let service: RequestSourcesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestSourcesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
