import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { IncomeFields } from '../models/IncomeFields';
import { PropertyFields } from '../models/PropertyFields';
import { LoanFields } from '../models/LoanFields';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  applications: ApplicationDetails[];
  incomeList: IncomeFields[];
  propertyList: PropertyFields[];
  loanList: LoanFields[];

  showApplication: boolean = false;
  showIncomeList: boolean = false;
  showPropertyList: boolean = false;
  showLoanList: boolean = false;

  applicationId: number;
  appDetail: ApplicationDetails;
  incomeDetail: IncomeFields;
  propertyDetail: PropertyFields;
  loanDetail: LoanFields;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  viewApplications() {
    if(this.showApplication == false) {
      this.adminService.showApplicationList().subscribe(response => {
        this.applications = response;
        this.showApplication = !this.showApplication;
        this.showIncomeList = false;
        this.showPropertyList = false;
        this.showLoanList = false;
      })
    }
    
  }

  viewIncomeList() {
    if(this.showIncomeList == false) {
      this.adminService.showIncomeList().subscribe(response => {
        this.incomeList = response;
        this.showIncomeList = !this.showIncomeList;
        this.showApplication = false;
        this.showPropertyList = false;
        this.showLoanList = false;
      })
    }
  }

  viewPropertyList() {
    if(this.showPropertyList == false) {
      this.adminService.showPropertyList().subscribe(response => {
        this.propertyList = response;
        this.showPropertyList = !this.showPropertyList;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showLoanList = false;
      })
    }
  }

  viewLoanList() {
    if(this.showLoanList == false) {
      this.adminService.showLoansList().subscribe(response => {
        this.loanList = response;
        this.showLoanList = !this.showLoanList;
        this.showApplication = false;
        this.showIncomeList = false;
        this.showPropertyList = false;
      })
    }
  }

  viewAppDetail() {
    this.adminService.viewAppDetail(this.applicationId).subscribe(response => {
      this.appDetail = response;
      console.log(JSON.stringify(this.appDetail));
    })
  }

  viewIncomeDetail() {
    this.adminService.viewIncomeDetail(this.applicationId).subscribe(response => {
      this.incomeDetail = response;
      console.log(this.incomeDetail);
    })
  }

  viewPropertyDetail() {
    this.adminService.viewPropertyDetail(this.applicationId).subscribe(response => {
      this.propertyDetail = response;
      console.log(this.propertyDetail);
    })
  }

  viewLoanDetail() {
    this.adminService.viewLoanDetail(this.applicationId).subscribe(response => {
      this.loanDetail = response;
      console.log(this.loanDetail);
    })
  }

}
