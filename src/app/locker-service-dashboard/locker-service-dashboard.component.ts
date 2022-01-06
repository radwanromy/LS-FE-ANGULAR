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
       relid:[''],
      oprbrancd: [''],
     cuscod: [''],
      brancd: [''],
     actype:[''],
      actnum:[''],
    lckrid:[''],
     drwrid:[''],
     remarks:[''],
     reldate:[''],
      paystat:[''],      
     oprstamp:[''],
     oprtimstamp:[''],
     update_BY:[''],
    update_DATE:[''],
      appflg:[''],
     appstamp:[''],
     dob:[''],
     age:[''],
     addone:[''],
     addtwo:[''],
     house:[''],
     city:[''],
     phone:[''],
     
     ocpatn:[''],
     email:[''],
     
     cname:[''],
     apptimstamp: ['']
    })
    this.getAllLockerServiceDetails();
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
  } 
  postLockerServiceDetails(){
    
    this.lockerServiceModelObj.lckrid = this.formValue.value.lckrid;
    this.lockerServiceModelObj.drwrid = this.formValue.value.drwrid;
    this.lockerServiceModelObj.cuscod = this.formValue.value.cuscod;
    this.lockerServiceModelObj.actype = this.formValue.value.actype;
    this.lockerServiceModelObj.actnum = this.formValue.value.actnum;
    this.lockerServiceModelObj.brancd = this.formValue.value.brancd;
    this.lockerServiceModelObj.oprbrancd = this.formValue.value.oprbrancd;
    this.lockerServiceModelObj.appflg = this.formValue.value.appflg;
    this.lockerServiceModelObj.appstamp = this.formValue.value.appstamp;
    this.lockerServiceModelObj.dob = this.formValue.value.dob;
    this.lockerServiceModelObj.age = this.formValue.value.age;
    this.lockerServiceModelObj.apptimstamp = this.formValue.value.apptimstamp;
    this.lockerServiceModelObj.oprstamp = this.formValue.value.oprstamp;
    this.lockerServiceModelObj.paystat = this.formValue.value.paystat;
    this.lockerServiceModelObj.oprtimstamp = this.formValue.value.oprtimstamp;
    this.lockerServiceModelObj.reldate = this.formValue.value.reldate;
    this.lockerServiceModelObj.remarks = this.formValue.value.remarks;
    this.lockerServiceModelObj.update_BY = this.formValue.value.update_BY;
    this.lockerServiceModelObj.update_DATE = this.formValue.value.update_DATE;
    this.lockerServiceModelObj.addone = this.formValue.value.addone;
    this.lockerServiceModelObj.addtwo = this.formValue.value.addtwo;
    this.lockerServiceModelObj.house = this.formValue.value.house;
    this.lockerServiceModelObj.city = this.formValue.value.city;
    this.lockerServiceModelObj.phone = this.formValue.value.phone;
    this.lockerServiceModelObj.ocpatn = this.formValue.value.ocpatn;
    this.lockerServiceModelObj.email = this.formValue.value.email;
    this.lockerServiceModelObj.cname = this.formValue.value.cname;

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
      alert("Something went wrong with insert");
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
      this.api.deleteEmployee(res.relid)
      .subscribe(res => {
        
        alert("Deleted");
        this.getAllLockerServiceDetails();
      })
    }



    getOnForm(row: any){
      this.lockerServiceModelObj.relid = row.relid;
      this.formValue.controls['lckrid'].patchValue(row.lckrid);
      this.formValue.controls['drwrid'].patchValue(row.drwrid);
      this.formValue.controls['cuscod'].patchValue(row.cuscod);
      this.formValue.controls['actype'].patchValue(row.actype);
      this.formValue.controls['actnum'].patchValue(row.actnum);
      this.formValue.controls['brancd'].patchValue(row.brancd);
      this.formValue.controls['oprbrancd'].patchValue(row.oprbrancd);
      this.formValue.controls['appflg'].patchValue(row.appflg);
      this.formValue.controls['appstamp'].patchValue(row.appstamp);
      this.formValue.controls['dob'].patchValue(row.dob);
      this.formValue.controls['age'].patchValue(row.age);
      this.formValue.controls['apptimstamp'].patchValue(row.apptimstamp);
      this.formValue.controls['oprstamp'].patchValue(row.oprstamp);
      this.formValue.controls['paystat'].patchValue(row.paystat);
      this.formValue.controls['oprtimstamp'].patchValue(row.oprtimstamp);
      this.formValue.controls['reldate'].patchValue(row.reldate);
      this.formValue.controls['remarks'].patchValue(row.remarks);
      this.formValue.controls['update_BY'].patchValue(row.update_BY);
      this.formValue.controls['update_DATE'].patchValue(row.update_DATE);
      this.formValue.controls['addone'].patchValue(row.addone);
      this.formValue.controls['addtwo'].patchValue(row.addtwo);
      this.formValue.controls['house'].patchValue(row.house);
      this.formValue.controls['city'].patchValue(row.city);
      this.formValue.controls['phone'].patchValue(row.phone);
      this.formValue.controls['ocpatn'].patchValue(row.ocpatn);
      this.formValue.controls['email'].patchValue(row.email);
      this.formValue.controls['cname'].patchValue(row.cname);

      this.showAdd= false;
      this.showUpdate= true;
    }

 

  updateLockerServiceDetails(){
    this.lockerServiceModelObj.lckrid = this.formValue.value.lckrid;
    this.lockerServiceModelObj.drwrid = this.formValue.value.drwrid;
    this.lockerServiceModelObj.cuscod = this.formValue.value.cuscod;
    this.lockerServiceModelObj.actype = this.formValue.value.actype;
    this.lockerServiceModelObj.actnum = this.formValue.value.actnum;
    this.lockerServiceModelObj.brancd = this.formValue.value.brancd;
    this.lockerServiceModelObj.oprbrancd = this.formValue.value.oprbrancd;
    this.lockerServiceModelObj.appflg = this.formValue.value.appflg;
    this.lockerServiceModelObj.appstamp = this.formValue.value.appstamp;
    this.lockerServiceModelObj.dob = this.formValue.value.dob;
    this.lockerServiceModelObj.age = this.formValue.value.age;
    this.lockerServiceModelObj.apptimstamp = this.formValue.value.apptimstamp;
    this.lockerServiceModelObj.oprstamp = this.formValue.value.oprstamp;
    this.lockerServiceModelObj.paystat = this.formValue.value.paystat;
    this.lockerServiceModelObj.oprtimstamp = this.formValue.value.oprtimstamp;
    this.lockerServiceModelObj.reldate = this.formValue.value.reldate;
    this.lockerServiceModelObj.remarks = this.formValue.value.remarks;
    this.lockerServiceModelObj.update_BY = this.formValue.value.update_BY;
    this.lockerServiceModelObj.update_DATE = this.formValue.value.update_DATE;
    this.lockerServiceModelObj.addone = this.formValue.value.addone;
    this.lockerServiceModelObj.addtwo = this.formValue.value.addtwo;
    this.lockerServiceModelObj.house = this.formValue.value.house;
    this.lockerServiceModelObj.city = this.formValue.value.city;
    this.lockerServiceModelObj.phone = this.formValue.value.phone;
    this.lockerServiceModelObj.ocpatn = this.formValue.value.ocpatn;
    this.lockerServiceModelObj.email = this.formValue.value.email;
    this.lockerServiceModelObj.cname = this.formValue.value.cname;
      // console.log(this.lockerServiceModelObj);
       this.api.updateEmployee(this.lockerServiceModelObj,this.lockerServiceModelObj.relid)
       .subscribe(res=>{
        alert("Update Successfully")
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllLockerServiceDetails();
        this.showUpdate=false;
      },
        err=>{
          alert("Something wrong in update");
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
      // console.log("Event Succefully");
      this.lockerServiceModelObj.relid=this.formValue.value.relid;
      // console.log(this.lockerServiceModelObj.relid);
      
      this.api.getByIdRelease(this.lockerServiceModelObj.relid)
      .subscribe(res=>{
        console.log(res);
        this.getOnForm(res);
      },
      err=>{
        alert("Searching ID Is Not Found. Kindly Check The ID Number Again!");
      })
    }
    
    // function ageCalculator() {
    //   var userinput =document.getElementById("DOB")?.nodeValue; 

    //   if(userinput==null || userinput==''){  
    //     document.getElementById("message").innerHTML = "**Choose a date please!";    
    //     return false;   
    //   }
      
    // }


    
    

    


    


}


