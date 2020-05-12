import { TestBed } from '@angular/core/testing';

import { NewpostService } from './newpost.service';

describe('NewpostService', () => {
  let service: NewpostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewpostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
