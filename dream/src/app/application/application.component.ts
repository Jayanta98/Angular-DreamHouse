import { Component, OnInit } from '@angular/core';
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
  regsteringStatus :ApplicationSubmitStatus;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }



  onSubmit() {
    // this.application.applicationStatus = "Pending";
    // this.application.dateOfAppointment = "2020-10-07";
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.application));
    this.customerService.applicationSubmit(this.application).subscribe(response => {
      console.log(response.statusMessage);
      console.log(response.status);
      console.log(response.applicationId);
      console.log(response.name);
      //alert(JSON.stringify(response));
      this.regsteringStatus=response;
      alert(JSON.stringify(this.regsteringStatus))   //need to create an registeringStatus----> this.regsteringStatus=response;
      sessionStorage.setItem('name',response.name);
      sessionStorage.setItem("applicationId",String(response.applicationId));
    })
  }

}
