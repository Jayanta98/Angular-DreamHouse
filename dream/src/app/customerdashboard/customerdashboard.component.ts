import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Application } from '../models/Application';
import { Accountdetail } from '../models/accountdetail';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  applicationId: number;
  accountNo: number;
  application: Application = new Application();
  acdetail: Accountdetail= new Accountdetail();

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
  }

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.applicationId).subscribe(response =>{
      this.application = response;
      alert(JSON.stringify(this.application));
      if(this.application==null){
        this.router.navigate(['/error'])
      }else{
        console.log(this.application);
        this.router.navigate(['/']);
      }
    })
  }

  onAccountSubmit(){
    this.customerService.getAccountdetails(this.accountNo).subscribe(response =>{
      this.acdetail = response;
      alert(JSON.stringify(this.acdetail));
      if(this.acdetail.accountstatus==true){
        console.log(this.acdetail.account);
        this.router.navigate(['/']);
      }else{
        this.router.navigate(['/error']);
      }
    })

  }

}
