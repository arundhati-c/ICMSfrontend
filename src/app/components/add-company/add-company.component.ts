import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  displayMessage = '';
  companyModel = new ICompany(0,'', '', '');
  submitted = false;
  constructor(private companyService: CompanyService) { }


  ngOnInit(): void {  }
  onSubmit() { 
    this.submitted = true;
    this.companyService.addCompany(this.companyModel).subscribe(
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
