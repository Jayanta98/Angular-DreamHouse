import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registergreeting',
  templateUrl: './registergreeting.component.html',
  styleUrls: ['./registergreeting.component.css']
})
export class RegistergreetingComponent implements OnInit {

  name: string;//return from backend
  applicationId: number;//return from back end
  dateofappointment: Date;//return from backend

  constructor() { }

  ngOnInit(): void {

    this.name =sessionStorage.getItem("name");
    this.applicationId= Number(sessionStorage.getItem("applicationId"));
    
  }

}
