import { Component, OnInit } from '@angular/core';
import { Income} from '../models/income';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {

  model: any= {};
  income: Income= new Income();


  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.customerService.incomeSubmit(this.income).subscribe(response => {
      alert(JSON.stringify(response));      
    })
  }

}
