import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacementDrivesComponent } from './placement-drives.component';

describe('PlacementDrivesComponent', () => {
  let component: PlacementDrivesComponent;
  let fixture: ComponentFixture<PlacementDrivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlacementDrivesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementDrivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
