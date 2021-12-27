import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup } from '@angular/forms';
import { LockerServiceModel } from './locker-service-dash board.model';

@Component({
  selector: 'app-locker-service-dashboard',
  templateUrl: './locker-service-dashboard.component.html',
  styleUrls: ['./locker-service-dashboard.component.css']
})
export class LockerServiceDashboardComponent implements OnInit {

  formValue !: FormGroup;
  lockerServiceModelObj : LockerServiceModel = new LockerServiceModel();


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
  postLockerServiceDetails(){
    this.lockerServiceModelObj.fname = this.formValue.value.fname;
    this.lockerServiceModelObj.lname = this.formValue.value.lname;
    this.lockerServiceModelObj.eid = this.formValue.value.eid;
    this.lockerServiceModelObj.mno = this.formValue.value.mno;
    this.lockerServiceModelObj.sal = this.formValue.value.sal;

    this.api.postLocker(this.lockerServiceModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Locker Details Added Successfully.");
    },
    err=>{
      alert("Something went wrong");
    })
    


  }

}
