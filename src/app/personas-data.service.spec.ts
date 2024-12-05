import { TestBed } from '@angular/core/testing';

import { PersonasDataService } from './personas-data.service';

describe('PersonasDataService', () => {
  let service: PersonasDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonasDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
