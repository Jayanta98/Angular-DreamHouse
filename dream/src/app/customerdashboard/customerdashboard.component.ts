import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Router } from '@angular/router';
import { Accountdetail } from '../models/accountdetail';
import { Applicationdetail} from '../models/applicationdetail';
import { identifierModuleUrl } from '@angular/compiler';


@Component({
  selector: 'app-customerdashboard',
  templateUrl: './customerdashboard.component.html',
  styleUrls: ['./customerdashboard.component.css']
})
export class CustomerdashboardComponent implements OnInit {

  applicationId: number;
  accountNo: number;
  appdetail: Applicationdetail = new Applicationdetail();
  acdetail: Accountdetail= new Accountdetail();

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
  }

  onApplicationSubmit(){
    this.customerService.getApplicationdetails(this.applicationId).subscribe(response =>{
      this.appdetail = response;
      alert(JSON.stringify(this.appdetail));
      if(this.appdetail.applicationStatus==true){
        console.log(this.appdetail.application);
        this.router.navigate(['/error'])
      }else{
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
