import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { volGuard } from './vol.guard';

describe('volGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => volGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
