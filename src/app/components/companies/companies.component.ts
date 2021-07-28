import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companyArr? : ICompany[]; 

  constructor(
    private companyService : CompanyService, 
    private router: Router) { }

  ngOnInit(): void {
      this.companyService.getCompanies().subscribe(response => this.companyArr=response);
  }

  onSelect(company : ICompany){
     this.router.navigate(['/viewCompanies', company])
  }

}
