import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HeroService } from './hero.service';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [RouterTestingModule.withRoutes([]), HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
