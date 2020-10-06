import { CreateAccountDetailsByAdmin } from './models/CreateAccountDetailsByAdmin';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AdminLogin } from './models/AdminLogin';
import { AdminLoginStatus } from './models/AdminLoginStatus';

import { ApplicationDetails } from './models/ApplicationDetails';
import { PropertyFields } from './models/PropertyFields';
import { LoanFields } from './models/LoanFields';
import { IncomeFields } from './models/IncomeFields';
import { Status } from './models/Status';

@Injectable({
  providedIn: 'root'
})

export class AdminService {

  constructor(private http: HttpClient) { }

  loginAdmin(adminLogin: AdminLogin) : Observable<AdminLoginStatus> {
    let url = 'http://localhost:9292/admin-login';
    return this.http.post<AdminLoginStatus>(url, adminLogin);
  }

  showApplicationList() : Observable<Array<ApplicationDetails>> {
    let url = 'http://localhost:9292/view-all-applications';
    return this.http.get<Array<ApplicationDetails>>(url);
  }

  createAccountByAdmin(accDetailsByAdmin:CreateAccountDetailsByAdmin) : Observable<Status>{
    let url= 'http://localhost:9292/account-create-byadmin';
    return this.http.post<Status>(url,accDetailsByAdmin);
  }

  showIncomeList(): Observable<Array<IncomeFields>> {
    let url = 'http://localhost:9292/view-all-income-details';
    return this.http.get<Array<IncomeFields>>(url);
  }

  showPropertyList(): Observable<Array<PropertyFields>> {
    let url = 'http://localhost:9292/view-all-property-details';
    return this.http.get<Array<PropertyFields>>(url);
  }

  showLoansList(): Observable<Array<LoanFields>> {
    let url = 'http://localhost:9292/view-all-loan-details';
    return this.http.get<Array<LoanFields>>(url);
  }

}
