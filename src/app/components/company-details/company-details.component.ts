import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ICompany } from 'src/app/model/company';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {

  public companyName? : string;
  public company? : ICompany;

  constructor(private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void { 
      this.route.paramMap.subscribe((params : ParamMap) =>{
      let name = params.get('name');
      this.companyName = String(name)
    });
  }

  gotoCompanies(){
    let selectedName = this.companyName ? this.companyName : null;
    this.router.navigate(['/viewCompanies']);
  }
}
