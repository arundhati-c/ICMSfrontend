import { TestBed } from '@angular/core/testing';

import { AddPlacementDriveService } from './add-placement-drive.service';

describe('AddPlacementDriveService', () => {
  let service: AddPlacementDriveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddPlacementDriveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
