import { TestBed } from '@angular/core/testing';

import { FaltaService } from './falta.service';

describe('FaltaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FaltaService = TestBed.get(FaltaService);
    expect(service).toBeTruthy();
  });
});
