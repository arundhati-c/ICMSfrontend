import { Component, OnInit } from '@angular/core';
import { IPlacementDrive } from 'src/app/model/placementDrive';
import { PlacementDrivesComponent } from '../placement-drives/placement-drives.component';

@Component({
  selector: 'app-add-placement-drive',
  templateUrl: './add-placement-drive.component.html',
  styleUrls: ['./add-placement-drive.component.css']
})
export class AddPlacementDriveComponent implements OnInit {

  drive0? : IPlacementDrive;

  drive = {
    pId : 0,
    cName : null,
    employmentType : null,
    jobTitle : null,
    jobDescription : null,
    stipend : null,
    location : null,
    duration : null,
    degree : null,
    batch : null,
    branch : null,
    minCgpa : null,
    minXMarks : null,
    minXiiMarks : null,
    minDiplomaCgpa : null,
    activeBacklogs : 0,
    deadBacklogs : 0,
    gapYears : 0,
    requiredSkills : null,
    optionalSkills : null,
    requirementRemarks : null,
    formLink : null,
    formDeadline : null,
    formRemarks : null
  }
  constructor() { }

  ngOnInit(): void {
  }

}
