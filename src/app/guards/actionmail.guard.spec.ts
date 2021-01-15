import {TestBed} from '@angular/core/testing';

import {ActionmailGuard} from './actionmail.guard';

describe('ActionmailGuard', () => {
  let guard: ActionmailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ActionmailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
