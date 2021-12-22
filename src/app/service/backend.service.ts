import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  fw=""
private baseUrl:string="http://localhost:8097/interviewHelper";
  constructor(private http:HttpClient) { }

  getCourses()
  {
    return this.http.get(this.baseUrl+'/getCourses')
  }
  getRatings()
  {
    return this.http.get(this.baseUrl+'/getRatings')
  }
}
