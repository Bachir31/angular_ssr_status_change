import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { entityGuard } from './entity.guard';

describe('entityGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => entityGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
