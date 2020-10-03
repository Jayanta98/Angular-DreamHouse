import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../models/document';
import { CustomerService } from '../customer.service';
import { Status } from '../models/Status';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  // model: {};
  docSubmitstatus: Status;

  applicationId: any;
  panCard: any;
  voterIdCard: any;
  salarySlip: any;
  loa: any;
  nocFromBuilder: any;
  agreementToSale: any;


  // document: Document= new Document();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.applicationId = localStorage.getItem('applicationId');
  }

  onPanCardSelection(event) {
    this.panCard = event.target.files[0];
  }

  onVoterCardSelection(event) {
    this.voterIdCard = event.target.files[0];
  }
  
  onSalarySlipSelection(event) {
    this.salarySlip = event.target.files[0];
  }

  onLoaSelection(event) {
    this.loa = event.target.files[0];
  }

  onNocSelection(event) {
    this.nocFromBuilder = event.target.files[0];
  }

  onSaleAgreementSelection(event) {
    this.agreementToSale = event.target.files[0];
  }

  onSubmit(){
    // this.applicationId = 10035;
    let formData: FormData = new FormData();
    formData.append('applicationId', this.applicationId);
    formData.append('panCard', this.panCard);
    formData.append('voterIdCard', this.panCard);
    formData.append('salarySlip', this.panCard);
    formData.append('loa', this.panCard);
    formData.append('nocFromBuilder', this.panCard);
    formData.append('agreementToSale', this.panCard);

    console.log(formData);

    this.customerService.documentSubmit(formData).subscribe(response => {
      this.docSubmitstatus = response;
      alert(JSON.stringify(this.docSubmitstatus));

      if(this.docSubmitstatus.status == true) {
        this.router.navigate(['/login']);
      }
    })

  }

}
