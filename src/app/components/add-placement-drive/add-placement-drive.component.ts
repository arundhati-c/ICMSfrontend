import { Component, OnInit } from '@angular/core';
import { IPlacementDrive } from 'src/app/model/placementDrive';
import { PlacementDriveService } from 'src/app/services/placement-drive.service';

@Component({
  selector: 'app-add-placement-drive',
  templateUrl: './add-placement-drive.component.html',
  styleUrls: ['./add-placement-drive.component.css']
})
export class AddPlacementDriveComponent implements OnInit {

  driveModel = new IPlacementDrive(
    3,
    'HSBC',
    'Internship',
    'Frontend Intern',
    'Work with JAngular in products department',
    '30400',
    'Pune',
    '8 weeks',
    'B.tech.',
    '2022',
    'Comp, IT',
    '6.0',
    '60%',
    '60%',
    '6.0',
    0,
    0,
    0,
    'HTML',
    'CSS',
    '',
    'www.form-hsbc.com',
    '25 june'
  )

//    employmentType = ['Full Time', 'Internship']

  constructor(private driveService: PlacementDriveService) { }

  ngOnInit(): void {
    
  }

  onSubmit(){
    this.driveService.addPlacementDrive(this.driveModel).subscribe(
      data => console.log('Success!!!', data),
      err => console.error('Error!!', err)
    )
  }
}
