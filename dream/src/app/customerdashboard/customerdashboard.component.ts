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

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.applicationId).subscribe(response =>{
      this.appdetail = response;

      alert(JSON.stringify(this.appdetail));

      if(this.appdetail.status==true){
        console.log(this.appdetail.applicationStatusMessage);
        // this.router.navigate(['/'])
      }
      else{
        this.router.navigate(['/error']);
      }
    })
  }

  onAccountSubmit(){
    this.customerService.getAccountdetails(this.accountNo).subscribe(response =>{
      this.acdetail = response;

      alert(JSON.stringify(this.acdetail));
      
      if(this.acdetail.accountStatus==true){
        console.log(this.acdetail.accountStatus);
        // this.router.navigate(['/']);
      }
      else{
        this.router.navigate(['/error']);
      }
    })

  }

}
