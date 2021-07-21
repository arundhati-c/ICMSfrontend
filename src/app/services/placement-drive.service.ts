import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IPlacementDrive } from '../model/placementDrive';

@Injectable({
  providedIn: 'root'
})
export class PlacementDriveService {

  constructor(private http:HttpClient) { }

  private _url : string = "";

  getDrives() : Observable<IPlacementDrive[]>{
    return this.http.get<IPlacementDrive[]>(this._url);
  }

  getById(id:number){

  }

  addPlacementDrive(c : IPlacementDrive):Observable<IPlacementDrive>{
    return this.http.post<IPlacementDrive>(this._url, c);
  }

  updatePlacementDrive(name:String, p:IPlacementDrive) : Observable<IPlacementDrive>{
    return this.http.put<IPlacementDrive>('${this._url}/${name}', p);
  }

  deletePlacementDrive(name:string){

  }
}
