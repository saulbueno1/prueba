import { TestBed } from '@angular/core/testing';

import { ApipokemonService } from './apipokemon.service';

describe('ApipokemonService', () => {
  let service: ApipokemonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApipokemonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
