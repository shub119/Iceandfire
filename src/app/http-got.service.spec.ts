import { TestBed, inject } from '@angular/core/testing';

import { HttpGotService } from './http-got.service';

describe('HttpGotService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpGotService]
    });
  });

  it('should be created', inject([HttpGotService], (service: HttpGotService) => {
    expect(service).toBeTruthy();
  }));
});
