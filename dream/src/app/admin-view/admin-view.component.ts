import { Component, OnInit } from '@angular/core';
import { ApplicationDetails } from '../models/ApplicationDetails';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  applications: ApplicationDetails[];
  showApplication: boolean = false;

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  viewApplications() {
    this.adminService.showApplicationList().subscribe(response => {
      this.applications = response;
      this.showApplication = !this.showApplication;
      alert(JSON.stringify(this.applications));
      console.log(response);
      // alert(JSON.stringify(response));

    })
  }
}
