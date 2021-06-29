import { TestBed } from '@angular/core/testing';

import { DesktopAppService } from './desktop-app.service';

describe('DesktopAppService', () => {
  let service: DesktopAppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DesktopAppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
