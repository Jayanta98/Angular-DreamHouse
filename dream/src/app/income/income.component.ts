import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IncomeDetails } from '../models/IncomeDetails';
import { CustomerService } from '../customer.service';
import { Status } from '../models/Status';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  // model: any= {};
  incomeDetails: IncomeDetails = new IncomeDetails();
  applicationId: any;
  incomeStatus: Status;


  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.applicationId = localStorage.getItem('applicationId');
  }

  onSubmit(){
    this.incomeDetails.applicationId = this.applicationId;
    alert(JSON.stringify(this.incomeDetails));
    
    this.customerService.incomeSubmit(this.incomeDetails).subscribe(response => {
      this.incomeStatus = response;
      
      alert(JSON.stringify(this.incomeStatus));      
      console.log(this.incomeStatus.status);
      
      if(this.incomeStatus.status == true) {
        this.router.navigate(['/property']);
      }
    })
    
  }

}
