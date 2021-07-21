import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICompany } from '../model/company';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http:HttpClient) { }

  private base_url : string = "http://localhost:8085";
  _url? : string;

  getCompanies() : Observable<ICompany[]>{
    this._url = '/Companies';
    //return this.http.get<ICompany[]>(this._url);
    return this.http.get<ICompany[]>(this.base_url+this._url);
  }  

  getByName(name:String) : Observable<ICompany>{
    this._url = '/companies';
    return this.http.get<ICompany>(`${this.base_url+this._url}/${name}`);
  }

  addCompany(c : ICompany):Observable<ICompany>{
    this._url = '/new-company';
    return this.http.post<ICompany>(this.base_url+this._url, c);
  }

  updateCompany(name:String, c:ICompany) : Observable<ICompany>{
    this._url = '/companies';
    return this.http.put<ICompany>(`${this.base_url+this._url}/${name}`, c);
  }

  deleteCompany(name:string) : Observable<ICompany>{
    this._url = '/companies';
    return this.http.delete<ICompany>(`${this.base_url+this._url}/${name}`);
  }
  
}
