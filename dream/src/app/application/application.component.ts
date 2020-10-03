import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Application } from '../models/Application';
import { CustomerService } from '../customer.service';
import { ApplicationSubmitStatus } from '../models/ApplicationSubmitStatus';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})

export class ApplicationComponent implements OnInit {
  model: any = {};
  application: Application = new Application();
  registeringStatus: ApplicationSubmitStatus;

  constructor(
    private customerService: CustomerService,
    private router: Router,
    private datePipe: DatePipe
  ) { }

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
      console.log(response.dateOfAppointment)

      this.registeringStatus=response;

      alert(JSON.stringify(this.registeringStatus))   //need to create an registeringStatus----> this.regsteringStatus=response;
      console.log(this.registeringStatus.dateOfAppointment);

      if(this.registeringStatus.status == true){
        localStorage.setItem('name', String(response.name));
        localStorage.setItem('applicationId', String(response.applicationId));
        localStorage.setItem('dateofappointment', this.datePipe.transform(response.dateOfAppointment, "yyyy-MM-dd"));
        alert("Hi");
        this.router.navigate(['/on-register']);
        alert("ok end");
      }
      else{
        this.router.navigate(['/error']);
      }

    })
  }

}
