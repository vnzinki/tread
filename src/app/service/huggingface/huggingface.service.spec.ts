import { TestBed } from '@angular/core/testing';

import { HuggingfaceService } from './huggingface.service';

describe('HuggingfaceService', () => {
  let service: HuggingfaceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HuggingfaceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
