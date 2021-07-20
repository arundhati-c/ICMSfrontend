import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private _url : string = "";
  getUsers(){
    return[
      {"id" : 1, "name": "tpo"},
      {"id" : 2, "name": "tpo2"},
    ]
    //return this.http.get<IUser[]>(this._url);
  }

}
