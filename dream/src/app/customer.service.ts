import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Application } from './models/Application';
import { ApplicationSubmitStatus } from './models/ApplicationSubmitStatus';
import { IncomeDetails } from './models/IncomeDetails';
import { Status } from './models/Status';
import { Property} from './models/property';
import { Loan } from './models/loan';
import { Document } from './models/document';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  applicationSubmit(application: Application) : Observable<ApplicationSubmitStatus> {
    let url = 'http://localhost:9292/application-submit';
    return this.http.post<ApplicationSubmitStatus>(url, application);
  }

  incomeSubmit(incomeDetails: IncomeDetails) : Observable <Status> {
    let url = 'http://localhost:9292/income-submit';
    return this.http.post<Status>(url, incomeDetails);
  }

  propertySubmit(propertyDetails: Property) : Observable <any> {// modifications required
    let url = 'http://localhost:9292/property-submit';
    return this.http.post<Status>(url, propertyDetails);
  }

  loanSubmit(loanDetails: Loan) : Observable <any> {// modifications required
    let url = 'http://localhost:9292/loan-submit';
    return this.http.post<Status>(url, loanDetails);
  }

  documentSubmit(documentupload: Document) : Observable <any> {// modifications required
    let url = 'http://localhost:9292/document-submit';
    return this.http.post<Status>(url, documentupload);
  }
  
  trackApplication(applicationId: number) : Observable<Status> {
    let url = 'http://localhost:9292/track?applicationId='+applicationId;
    return this.http.get<Status>(url);
  }
}