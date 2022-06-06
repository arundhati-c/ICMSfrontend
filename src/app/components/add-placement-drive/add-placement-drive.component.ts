import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/model/company';
import { IPlacementDrive } from 'src/app/model/placementDrive';
import { CompanyService } from 'src/app/services/company.service';
import { PlacementDriveService } from 'src/app/services/placement-drive.service';

@Component({
  selector: 'app-add-placement-drive',
  templateUrl: './add-placement-drive.component.html',
  styleUrls: ['./add-placement-drive.component.css']
})
export class AddPlacementDriveComponent implements OnInit {

  displayMessage = '';
  driveModel = new IPlacementDrive(
    0,
    '',
    'Internship',
    'Intern',
    'Work with ',
    '',
    '',
    '8 weeks',
    'B.Tech.',
    '2022',
    'Comp, IT',
    '6.0',
    '60%',
    '60%',
    '6.0',
    0,
    0,
    0,
    '',
    '',
    '',
    'www.form-.com',
    '25 June'
  )

  companies? : ICompany[];
//    employmentType = ['Full Time', 'Internship']

  constructor(private driveService: PlacementDriveService, private companyService:CompanyService) { }


  ngOnInit(): void {
    this.companyService.getCompanies().subscribe(data => this.companies = data)
  }

  onSubmit(){
    this.driveService.addPlacementDrive(this.driveModel).subscribe(
      data => {
        console.log('Success!!!', data);
        this.displayMessage = 'Success!';
      },
      err => {
        console.error('Error!!', err);
        this.displayMessage = 'Request could not be completed!';
    }
    )
  }
}
