import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICompany } from 'src/app/model/company';
import { CompanyService } from 'src/app/services/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  //public companyName? : string;
  

  public companyName? : string;
  public companyId? : number;
  public companyWebsite? : string;
  public companyDescription? : string;
  

  constructor( private companyService : CompanyService, private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void { 
    this.getParameters();
  }

  getParameters() {
    this.route.paramMap.subscribe((params : ParamMap) =>{
      let name = params.get('name');
      this.companyName = String(name);
      let site = params.get('website');
      this.companyName = String(site);   
      let desc = params.get('description');
      this.companyDescription = String(desc);
    });
  }

  //backbutton
  gotoCompanies(){
    let selectedName = this.companyName ? this.companyName : null;
    this.router.navigate(['/viewCompanies']);
  }
}
