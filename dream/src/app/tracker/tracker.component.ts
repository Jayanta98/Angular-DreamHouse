import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Status } from '../models/Status';

@Component({
  selector: 'app-tracker',
  templateUrl: './tracker.component.html',
  styleUrls: ['./tracker.component.css']
})
export class TrackerComponent implements OnInit {

  applicationId: number;
  appStatus: Status = new Status();

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  track() {
    this.customerService.trackApplication(this.applicationId).subscribe(response => {

      this.appStatus = response;

      alert(JSON.stringify(this.appStatus));
      console.log(this.appStatus.status);
      console.log(this.appStatus.statusMessage);
    })
  }

}
