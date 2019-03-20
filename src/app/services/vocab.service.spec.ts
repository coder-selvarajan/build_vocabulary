import { TestBed } from '@angular/core/testing';

import { VocabService } from './vocab.service';

describe('VocabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VocabService = TestBed.get(VocabService);
    expect(service).toBeTruthy();
  });
});
