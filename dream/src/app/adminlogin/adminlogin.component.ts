import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminLogin } from '../models/AdminLogin';
import { AdminService } from '../admin.service';
import { AdminLoginStatus } from '../models/AdminLoginStatus';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {

  // model: any = {};
  adminLogin: AdminLogin = new AdminLogin();
  adminLoginStatus: AdminLoginStatus;

  constructor(
    private adminrService: AdminService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    alert(JSON.stringify(this.adminLogin));

    this.adminrService.loginAdmin(this.adminLogin).subscribe(response => {
      this.adminLoginStatus = response;

      if(this.adminLoginStatus.status == true) {
        sessionStorage.setItem('adminName', String(this.adminLoginStatus.name));
        sessionStorage.setItem('adminId', String(this.adminLoginStatus.adminId));
        this.router.navigate(['/admin-dashboard']);
      }
      else {
        this.router.navigate(['/login-error']);
      }
    })

  }

}
