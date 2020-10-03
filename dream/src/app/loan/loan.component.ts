import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { LoanDetails } from '../models/LoanDetails';
import { Status } from '../models/Status';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  // model={};
  loanDetails: LoanDetails = new LoanDetails();
  applicationId: any;
  loanSubmitStatus: Status;

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.applicationId = localStorage.getItem('applicationId');
  }

  onSubmit(){
    this.loanDetails.applicationId = this.applicationId;
    alert(JSON.stringify(this.loanDetails));
    
    this.customerService.loanSubmit(this.loanDetails).subscribe(response => {
      this.loanSubmitStatus = response;

      alert(JSON.stringify(this.loanSubmitStatus));      
      console.log(this.loanSubmitStatus.status);
      
      if(this.loanSubmitStatus.status == true) {
        this.router.navigate(['/document']);
      }
    })
  }

}
