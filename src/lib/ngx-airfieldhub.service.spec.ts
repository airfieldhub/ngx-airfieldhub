import { TestBed } from '@angular/core/testing';

import { NgxAirfieldhubService } from './ngx-airfieldhub.service';

describe('NgxAirfieldhubService', () => {
  let service: NgxAirfieldhubService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxAirfieldhubService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
