import { Component, OnInit } from '@angular/core';
// import { api } from 'src/app/shared/api.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { LockerServiceModel } from './locker-service-dash board.model';

@Component({
  selector: 'app-locker-service-dashboard',
  templateUrl: './locker-service-dashboard.component.html',
  styleUrls: ['./locker-service-dashboard.component.css']
})
export class LockerServiceDashboardComponent implements OnInit {

  formValue !: FormGroup;
  lockerServiceModelObj : LockerServiceModel = new LockerServiceModel();
  lockerServiceData !: any;
  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formBuilder: FormBuilder,
    private api : ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      userid : [''],
      fname : [''],
      lname : [''],
      eid : [''],
      mno : [''],
      sal : ['']
    })
    this.getAllLockerServiceDetails();
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  } 
  postLockerServiceDetails(){
    
    this.lockerServiceModelObj.userid = this.formValue.value.userid;
    this.lockerServiceModelObj.fname = this.formValue.value.fname;
    this.lockerServiceModelObj.lname = this.formValue.value.lname;
    this.lockerServiceModelObj.eid = this.formValue.value.eid;
    this.lockerServiceModelObj.mno = this.formValue.value.mno;
    this.lockerServiceModelObj.sal = this.formValue.value.sal;

    this.api.postEmployee(this.lockerServiceModelObj)
    .subscribe(res => {
      console.log(res);
      alert("Locker Details Added Successfully.")
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllLockerServiceDetails();
    },
    err=>{
      alert("Something went wrong");
    })
  }
  getAllLockerServiceDetails(){
      this.api.getEmployee()
      .subscribe( res => {
        this.lockerServiceData = res;
        this.showAdd = true;
      })
    }

  deleteLockerServiceData(res : any){
      this.api.deleteEmployee(res.id)
      .subscribe(res => {
        
        alert("Deleted");
        this.getAllLockerServiceDetails();
      })
    }

    // onKeyPress(event : any){
    //   console.log("Event Succefully");
    //   this.lockerServiceModelObj.relid=this.formValue.value.relid;
      
    //   this.api.getById(this.lockerServiceModelObj.relid)
    //   .subscribe(res=>{
        
    //     this.getOnForm(res);
    //   },
    //   err=>{
    //     alert("Something Wrong");
    //   })
    // }

    getOnForm(row: any){
      this.lockerServiceModelObj.id = row.id;
      this.formValue.controls['userid'].patchValue(row.userid);
      this.formValue.controls['fname'].patchValue(row.fname);
      this.formValue.controls['lname'].patchValue(row.lname);
      this.formValue.controls['eid'].patchValue(row.eid);
      this.formValue.controls['mno'].patchValue(row.mno);
      this.formValue.controls['sal'].patchValue(row.sal);

      this.showAdd= false;
      this.showUpdate= true;
    }

  updateLockerServiceDetails(){
    this.lockerServiceModelObj.userid = this.formValue.value.userid;
      this.lockerServiceModelObj.fname = this.formValue.value.fname;
      this.lockerServiceModelObj.lname = this.formValue.value.lname;
      this.lockerServiceModelObj.eid = this.formValue.value.eid;
      this.lockerServiceModelObj.mno = this.formValue.value.mno;
      this.lockerServiceModelObj.sal = this.formValue.value.sal;
      // console.log(this.lockerServiceModelObj);
       this.api.updateEmployee(this.lockerServiceModelObj,this.lockerServiceModelObj.id)
       .subscribe(res=>{
        alert("Update Successfully")
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllLockerServiceDetails();
      },
        err=>{
          alert("Something wrong");
        })


        
  //   console.log(this.ReleaseModeloObj);

  //   this.apiservice.UpdateByIdRelease(this.ReleaseModeloObj.relid, this.ReleaseModeloObj,)
  //   .subscribe(res=>{
  //     alert("Update Successfully")
  //     let ref=document.getElementById("cancel")
  //     ref?.click();
  //     this.formValue.reset();
  //   },
  //     err=>{
  //       alert("Something wrong");
  //     })
  // }
        
    }

    onKeyPress(event : any){
      console.log("Event Succefully");
      this.lockerServiceModelObj.userid=this.formValue.value.userid;
      
      this.api.getByIdRelease(this.lockerServiceModelObj.userid)
      .subscribe(res=>{
        
        this.getOnForm(res);
      },
      err=>{
        alert("Something Wrong");
      })
    }
    


}


