import { TestBed } from '@angular/core/testing';

import { ActiveViewService } from './active-view.service';

describe('ActiveViewService', () => {
  let service: ActiveViewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActiveViewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
