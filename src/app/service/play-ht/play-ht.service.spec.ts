import { TestBed } from '@angular/core/testing';

import { PlayHtService } from './play-ht.service';

describe('PlayHtService', () => {
  let service: PlayHtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayHtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
