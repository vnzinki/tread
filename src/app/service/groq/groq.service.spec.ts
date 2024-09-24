import { TestBed } from '@angular/core/testing';

import { GroqService } from './groq.service';

describe('GroqService', () => {
  let service: GroqService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GroqService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
