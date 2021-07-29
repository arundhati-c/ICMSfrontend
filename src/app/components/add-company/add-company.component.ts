import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/model/company';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  companyModel = new ICompany(1,'avaya','avaya.com','avaya is noice');
  
  constructor( private httpClient: HttpClient) { }


  ngOnInit(): void {
  }

  
}
