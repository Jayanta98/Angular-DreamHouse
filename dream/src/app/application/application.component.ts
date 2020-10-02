import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Application } from '../models/Application';
import { CustomerService } from '../customer.service';
import { ApplicationSubmitStatus } from '../models/ApplicationSubmitStatus';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  model: any = {};
  application: Application = new Application();
  regsteringStatus :ApplicationSubmitStatus;
  constructor(private customerService: CustomerService,private router: Router, private datePipe: DatePipe) { }

  ngOnInit(): void {
  }



  onSubmit() {
    // this.application.applicationStatus = "done";
    // this.application.dateOfAppointment = "2020-10-07";
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.application));
    this.customerService.applicationSubmit(this.application).subscribe(response => {
      console.log(response.statusMessage);
      console.log(response.status);
      console.log(response.applicationId);
      console.log(response.name);
      console.log(response.dateofappointment)
      //alert(JSON.stringify(response));
      this.regsteringStatus=response;
      alert(JSON.stringify(this.regsteringStatus))   //need to create an registeringStatus----> this.regsteringStatus=response;
      console.log(this.regsteringStatus.dateofappointment);
      
      if(this.regsteringStatus.status==true){
        localStorage.setItem('name',response.name);
        localStorage.setItem("applicationId",String(response.applicationId));
        localStorage.setItem("dateofappointment",this.datePipe.transform(response.dateofappointment,"yyyy-MM-dd"));
        this.router.navigate(['/on-register']);
      }else{
        this.router.navigate(['/error']);
      }

    })
  }

}
