import { AdminService } from '../admin.service';
import { Status } from './../models/Status';
import { CreateAccountDetailsByAdmin } from './../models/CreateAccountDetailsByAdmin';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

accDetailsByAdmin:CreateAccountDetailsByAdmin=new CreateAccountDetailsByAdmin();
accCreateStatus:Status;

  constructor(private adminService:AdminService) { }

  ngOnInit(): void {
  }

  mySubmit(){
      JSON.stringify(this.accDetailsByAdmin);
      this.adminService.createAccountByAdmin(this.accDetailsByAdmin).subscribe(response=>{
        this.accCreateStatus=response;
        JSON.stringify(this.accCreateStatus);
      })
  }
}
