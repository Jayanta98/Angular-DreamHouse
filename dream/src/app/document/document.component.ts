import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Document } from '../models/document';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-document',
  templateUrl: './document.component.html',
  styleUrls: ['./document.component.css']
})
export class DocumentComponent implements OnInit {

  model: {};
  document: Document= new Document();

  constructor(
    private customerService: CustomerService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
