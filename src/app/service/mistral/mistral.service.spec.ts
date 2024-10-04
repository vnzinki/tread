import { TestBed } from '@angular/core/testing';

import { MistralService } from './mistral.service';

describe('MistralService', () => {
  let service: MistralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
