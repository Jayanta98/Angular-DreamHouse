import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminlogin } from '../models/adminlogin';
import { CustomerService } from '../customer.service';
import { Loginstatus } from '../models/loginstatus';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  model: any = {};
  adminlogin: Adminlogin = new Adminlogin();
  loginStatus: Loginstatus;

  constructor(private customerService: CustomerService,private router: Router) { }

  ngOnInit(): void {
  }

  adminLogin(){

    //some function to be included

    if(this.loginStatus.status==true){
      sessionStorage.setItem("adminname",this.adminlogin.adminname);//modification required
      sessionStorage.setItem("adminpassword",this.adminlogin.adminpassword);//modification required
      this.router.navigate(['/on-adminlogin']);
    }else{
      this.router.navigate(['/error']);
    }
  }

}
