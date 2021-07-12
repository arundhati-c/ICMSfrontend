import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor() { }

  getCompanies(){
    return[
      {"id" : 1, "name": "Citicorp"},
      {"id" : 2, "name": "Cisco"},
    ]
  }
  
}
