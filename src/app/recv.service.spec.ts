import { TestBed } from '@angular/core/testing';

import { RecvService } from './recv.service';

describe('RecvService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RecvService = TestBed.get(RecvService);
    expect(service).toBeTruthy();
  });
});
