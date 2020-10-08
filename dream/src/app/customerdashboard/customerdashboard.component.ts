import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Accountdetail } from '../models/accountdetail';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  applicationId: number;
  accountNo: number;
  appdetail: ApplicationDetails = new ApplicationDetails();
  acdetail: Accountdetail = new Accountdetail();
  name:string;
  showError: boolean = false;
  showStatus: boolean = false;
  statusMsg: string;
  accType: string;
  ifscCode: string;
  branchName: string;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.name=sessionStorage.getItem('customerName');
  }

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.applicationId).subscribe(response =>{
      this.appdetail = response;

      if(this.appdetail.status==true){
        this.showStatus = true;
        this.showError = false;
        this.statusMsg = this.appdetail.applicationStatusMessage;
      }
      else{
        this.showError = true;
        this.showStatus = false;
        this.statusMsg = this.appdetail.applicationStatusMessage;
      }
    })
  }

  onAccountSubmit(){
    this.customerService.getAccountdetails(this.accountNo).subscribe(response =>{
      this.acdetail = response;

      if(this.acdetail.accountStatus==true){
        this.showStatus = true;
        this.showError = false;
        this.accType = this.acdetail.accountType;
        this.ifscCode = this.acdetail.ifscCode;
        this.branchName = this.acdetail.branchName;
      }
      else{
        this.showError = true;
        this.showStatus = false;
        this.statusMsg = "Invalid account number";
      }
    })

  }

}
