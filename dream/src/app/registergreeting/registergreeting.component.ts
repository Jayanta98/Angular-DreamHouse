import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registergreeting',
  templateUrl: './registergreeting.component.html',
  styleUrls: ['./registergreeting.component.css']
})
export class RegistergreetingComponent implements OnInit {

  name: string;//return from backend
  applicationId: number;//return from back end
  dateofappointment: any;//return from backend

  constructor() { }

  ngOnInit(): void {

    this.name =localStorage.getItem("name");
    this.applicationId= Number(localStorage.getItem("applicationId"));
    this.dateofappointment= localStorage.getItem("dateofappointment");//date in string format;
    
  }

}
