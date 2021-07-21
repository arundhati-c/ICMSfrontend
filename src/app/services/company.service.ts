import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  private _url : string = "http://localhost:8085/Companies";

  getCompanies1(){
    return[
      {"id" : 1, "name": "Citicorp", "website" : "www.citi.com",  "description" : "company description here"},
      {"id" : 2, "name": "Cisco", "website" : "www.cisco.com","description" : "company description here"},
    ]
  }

  getCompanies() : Observable<ICompany[]>{
    return this.http.get<ICompany[]>(this._url);
  }
  

  getByName(name:String){
    return this.http.get(`${this._url}/${name}`);
  }

  addCompany(c : ICompany):Observable<ICompany>{
    return this.http.post<ICompany>(this._url, c);
  }

  updateCompany(name:String, c:ICompany) : Observable<ICompany>{
    return this.http.put<ICompany>('${this._url}/${name}', c);
  }

  deleteCompany(name:string){

  }
  
}
