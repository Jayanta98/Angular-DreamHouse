import { Component, OnInit } from '@angular/core';
import { Application } from '../models/Application';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  model: any = {};
  application: Application = new Application();

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
      alert(JSON.stringify(response));      
    })
  }

}
