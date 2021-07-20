import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddCompanyService {

  constructor(private http:HttpClient) { }

  private _url : string = "";

  addCompany(){
    
  }
}
