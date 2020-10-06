import { AdminService } from '../admin.service';
import { Status } from './../models/Status';
import { CreateAccountDetailsByAdmin } from './../models/CreateAccountDetailsByAdmin';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  accDetailsByAdmin: CreateAccountDetailsByAdmin = new CreateAccountDetailsByAdmin();
  accCreateStatus: Status;
  showDetails: boolean = false;
  appId: number;
  appdetail: ApplicationDetails = new ApplicationDetails();

  custEmail:any;
  accNumber:any;
  applicationStatus:any;

  constructor(
    private adminService:AdminService, 
    private customerService: CustomerService, 
    private router: Router
  ) { }

  ngOnInit(): void {
    this.accDetailsByAdmin.account.ifscCode = "DREAM10234";
    this.accDetailsByAdmin.account.branchCode = "10234";
    this.accDetailsByAdmin.account.branchName = "DREAM-KOLKATA";
  }

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.appId).subscribe(response =>{
      this.appdetail = response;

      this.accDetailsByAdmin.applicationId = this.appId;
      this.accDetailsByAdmin.account.firstName = this.appdetail.firstname;
      this.accDetailsByAdmin.account.middleName = this.appdetail.middlename;
      this.accDetailsByAdmin.account.lastName = this.appdetail.lastname;
      this.accDetailsByAdmin.account.amount = this.appdetail.ammount;
      this.accDetailsByAdmin.account.accountType = this.appdetail.accountType;


      this.accNumber = this.appdetail.accountNo;
      this.custEmail = this.appdetail.email;
      this.applicationStatus = this.appdetail.applicationStatusMessage;

      this.showDetails = true;

      alert(JSON.stringify(this.appdetail));

      if(this.appdetail.status==true){
        console.log(this.appdetail.applicationStatusMessage);
      }
      else{
        this.router.navigate(['/errorby-admin']);
      }
    })
  }

  mySubmit(){
    alert(JSON.stringify(this.accDetailsByAdmin)) ;
    this.adminService.createAccountByAdmin(this.accDetailsByAdmin).subscribe(response=>{
      this.accCreateStatus=response;
      alert( JSON.stringify(this.accCreateStatus));
    })
  }
}
