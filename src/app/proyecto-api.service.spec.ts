import { TestBed } from '@angular/core/testing';

import { ProyectoAPIService } from './proyecto-api.service';

describe('ProyectoAPIService', () => {
  let service: ProyectoAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProyectoAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
