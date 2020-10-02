import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './models/Application';
import { ApplicationSubmitStatus } from './models/ApplicationSubmitStatus';
import { Income } from './models/income';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  applicationSubmit(application: Application) : Observable<ApplicationSubmitStatus> {
    let url = 'http://localhost:9292/application-submit';
    return this.http.post<ApplicationSubmitStatus>(url, application);
  }

  incomeSubmit(income: Income) : Observable <any> {
    let url = 'http://localhost:9292/income-submit';
    return this.http.post<ApplicationSubmitStatus>(url, income);
  }
}
