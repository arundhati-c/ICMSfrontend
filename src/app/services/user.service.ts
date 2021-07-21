import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IUser } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  private _url : string = "";
  
  getUsers(){
    return this.http.get<IUser[]>(this._url);
  }
}
