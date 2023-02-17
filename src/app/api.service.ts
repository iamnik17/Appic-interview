import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  apiurl = 'https://dummy.restapiexample.com/api/v1/employees';

  GetEmployee() {
    return this.http.get(this.apiurl)
  }
}
