import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileSearchService {
  API_URL= "http://localhost:3000/api"
  constructor(private http:HttpClient ) { }

  getProfileInfo(profileName:string){
   return this.http.get(`${this.API_URL}/user?name=${profileName}`)
  }
}

