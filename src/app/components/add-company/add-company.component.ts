import { Component, OnInit } from '@angular/core';
import { ICompany } from 'src/app/model/company';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  base_url = "http://localhost:8085/drives";
  uploadForm? : FormGroup;

  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }


  company=new ICompany();

  name = ''
  website = ''
  descriptiom = ''

  ngOnInit(): void {
this.uploadForm = this.formBuilder.group({
  companyName: [''],
  companyWebsite:[''],
  description:['']
    });
  }

  onSubmit(){
    // const formData = new FormData();
    // formData.append('name', this.uploadForm.get('companyName').value);

    // this.httpClient.post<any>(this.base_url, formData).subscribe(
    //   (res) => console.log(res),
    //   (err) => console.log(err)
    // );

  }

}
