import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlacementDriveService {

  constructor(private http:HttpClient) { }

  private _url : string = "";

  getDrives(){
    return this.http.get(this._url);
  }
}
