import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-view',
  templateUrl: './admin-view.component.html',
  styleUrls: ['./admin-view.component.css']
})
export class AdminViewComponent implements OnInit {

  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  viewApplications() {
    this.adminService.showApplicationList().subscribe(response => {
      console.log(response);
      alert(JSON.stringify(response));

    })
  }
}
