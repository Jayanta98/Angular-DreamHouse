import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminLogin } from './models/AdminLogin';
import { AdminLoginStatus } from './models/AdminLoginStatus';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  loginAdmin(adminLogin: AdminLogin) : Observable<AdminLoginStatus> {
    let url = 'http://localhost:9292/admin-login';
    return this.http.post<AdminLoginStatus>(url, adminLogin);
  }
}
