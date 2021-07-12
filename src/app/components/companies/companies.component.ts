import { Component, OnInit } from '@angular/core';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  public companiesarr: { id: number; name: string; }[] | undefined;

  constructor(private companyService : CompanyService) { }

  ngOnInit(): void {
      this.companiesarr = this.companyService.getCompanies();
  }

}
