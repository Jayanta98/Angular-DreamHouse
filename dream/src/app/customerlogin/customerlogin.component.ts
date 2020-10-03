import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customerlogin } from '../models/customerlogin';
import { CustomerService } from '../customer.service';
import { Loginstatus } from '../models/loginstatus';

@Component({
  selector: 'app-customerlogin',
  templateUrl: './customerlogin.component.html',
  styleUrls: ['./customerlogin.component.css']
})
export class CustomerloginComponent implements OnInit {

  model: any = {};
  cutomerlogin: Customerlogin = new Customerlogin();
  loginStatus: Loginstatus;

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
  }

  customerLogin(){

    //some function to be included

    if(this.loginStatus.status==true){
      sessionStorage.setItem("customeremail",this.cutomerlogin.customeremail);//modification required
      sessionStorage.setItem("customerpassword",this.cutomerlogin.customerpassword);
      this.router.navigate(['/on-customerlogin']);
    }else{
      this.router.navigate(['/error']);
    }

  }

}
