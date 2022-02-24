import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
 API_URL= "http://localhost:3000/api"
  constructor(private http:HttpClient ) { }

  getProfileInfo(profileName:string){
    // let headers = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   'Access-Control-Allow-Origin': '*',
    //   'Access-Control-Allow-Headers': 'Content-Type',
    //   'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
    //   'Authorization': 'Bearer szdp79a2kz4wh4frjzuqu4sz6qeth8m3',
    // });
   return this.http.get(`${this.API_URL}/user?name=${profileName}`)
  }
}
