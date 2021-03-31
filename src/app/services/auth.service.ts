import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  registerUser(user) {
    let headers = new Headers();
    headers.append('Content-Type', 'Application/json');
    return this.http.post(
      'http://13.126.103.39/dealsandcompare/API/public/api/'
    );
  }
}
