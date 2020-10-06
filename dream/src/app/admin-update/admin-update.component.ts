import { Status } from './../models/Status';
import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { UpdateApplicationStatus } from '../models/UpdateApplicationStatus';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-update',
  templateUrl: './admin-update.component.html',
  styleUrls: ['./admin-update.component.css']
})
export class AdminUpdateComponent implements OnInit {



appId: number;
appdetail: ApplicationDetails = new ApplicationDetails();

  constructor(private adminService:AdminService,  private customerService: CustomerService, private router: Router) { }


  ngOnInit(): void {
  }

  updateAppStatusDetail:UpdateApplicationStatus= new UpdateApplicationStatus();//use for update form
feedbackStatus:Status;
  custEmail:any;

  accNumber:any;//can be use during EMI table updating time

  applicationStatus:any;
  fName:any;
  mName:any;
  lName:any;
  myApplicationId:any;

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.appId).subscribe(response =>{
      this.appdetail = response;

      this.myApplicationId=this.appId;
      this.fName=this.appdetail.firstname;
      this.mName=this.appdetail.middlename;
      this.lName=this.appdetail.lastname;

      this.custEmail=this.appdetail.email;
     this.applicationStatus= this.appdetail.applicationStatusMessage;


      alert(JSON.stringify(this.appdetail));

      if(this.appdetail.status==true){
        console.log(this.appdetail.applicationStatusMessage);
        // this.router.navigate(['/'])
      }
      else{
        this.router.navigate(['/errorby-admin']);
      }
    })
  }


  mySubmit(){
    alert(JSON.stringify(this.updateAppStatusDetail));

    this.adminService.updateApplicationStatus(this.updateAppStatusDetail).subscribe(response=>{
     this.feedbackStatus=response;
      alert(JSON.stringify(this.feedbackStatus)  );
    })
  }

}
