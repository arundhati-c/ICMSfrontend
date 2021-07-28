import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IPlacementDrive } from 'src/app/model/placementDrive';
import { PlacementDriveService } from 'src/app/services/placement-drive.service';

@Component({
  selector: 'app-placement-drives',
  templateUrl: './placement-drives.component.html',
  styleUrls: ['./placement-drives.component.css']
})
export class PlacementDrivesComponent implements OnInit {

  drives? : IPlacementDrive[];

  constructor(
    private driveService: PlacementDriveService,
    private router: Router) { }

  ngOnInit(): void {
    this.driveService.getDrives().subscribe(response => this.drives=response);
  }

}
