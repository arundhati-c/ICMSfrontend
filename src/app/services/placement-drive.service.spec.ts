import { TestBed } from '@angular/core/testing';

import { PlacementDriveService } from './placement-drive.service';

describe('PlacementDriveService', () => {
  let service: PlacementDriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlacementDriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
