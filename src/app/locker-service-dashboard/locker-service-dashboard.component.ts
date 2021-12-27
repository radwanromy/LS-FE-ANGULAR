import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-locker-service-dashboard',
  templateUrl: './locker-service-dashboard.component.html',
  styleUrls: ['./locker-service-dashboard.component.css']
})
export class LockerServiceDashboardComponent implements OnInit {

  formValue !: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      fname : [''],
      lname : [''],
      eid : [''],
      mno : [''],
      sal : ['']
    })
  }

}
