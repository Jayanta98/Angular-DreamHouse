import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PropertyDetails } from '../models/PropertyDetails';
import { CustomerService } from '../customer.service';
import { Status } from '../models/Status';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})

export class PropertyComponent implements OnInit {
  // model: any = {};
  propertyDetails: PropertyDetails = new PropertyDetails();
  applicationId: any;
  propertyStatus: Status;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.applicationId = localStorage.getItem('applicationId');
  }

  onSubmit(){
    this.propertyDetails.applicationId = this.applicationId;
    alert(JSON.stringify(this.propertyDetails));
    localStorage.setItem('estimatedamount',String(this.propertyDetails.property.estimatedAmount));

    this.customerService.propertySubmit(this.propertyDetails).subscribe(response => {
      this.propertyStatus = response;
      alert(JSON.stringify(this.propertyStatus));

      if(this.propertyStatus.status == true) {
        this.router.navigate(['/loan']);
      }
    })

    
  }

}
