import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlacementDrive } from '../model/placementDrive';

@Injectable({
  providedIn: 'root'
})
export class PlacementDriveService {

  constructor(private http:HttpClient) { }

  private base_url : string = "http://localhost:8085/drives";
  _url? : string ;

  getDrives() : Observable<IPlacementDrive[]>{
    this._url = '';
    return this.http.get<IPlacementDrive[]>(this.base_url+this._url);
  }

  getById(id:number) : Observable<IPlacementDrive>{
    this._url = '';
    return this.http.get<IPlacementDrive>(`${this.base_url+this._url}/${id}`);
  }

  addPlacementDrive(p : IPlacementDrive) {
    this._url = '';
    return this.http.post<any>(this.base_url, p);
  }

  updatePlacementDrive(name:String, p:IPlacementDrive) : Observable<IPlacementDrive>{
    this._url = '';
    return this.http.put<IPlacementDrive>(`${this.base_url+this._url}/${name}`, p);
  }

  deletePlacementDrive(name:string){
    this._url = '';
    return this.http.delete<IPlacementDrive>(`${this.base_url+this._url}/${name}`);
  }
}
