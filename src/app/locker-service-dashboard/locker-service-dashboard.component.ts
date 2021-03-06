import { Component, OnInit } from '@angular/core';
// import { api } from 'src/app/shared/api.service'
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { LockerServiceModel } from './locker-service-dash board.model';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgToastService } from 'ng-angular-popup';

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
  showform !: boolean;
  niform !: boolean;
  record !:boolean;
  fform !:boolean;
  filterTerm !: string;
  p: number = 1;
  c: number = 1;
  nomineeData !: any;
  filterTermN !: string;
  config:any;
  public birthdate!: Date;
  public agee!: number;
 
  constructor(private formBuilder: FormBuilder,
    private api : ApiService, private toast: NgToastService) { }

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
     apptimstamp: [''],

     nomi:  [''],
     nomin:  ['']  ,
     nomip:  [''],
     nomir:  [''],
     nomii:  [''],
     nomiin:  ['']  ,
     nomiip:  [''],
     nomiir:  [''],
     acnum:  [''],
     fk_relid:  ['']

    })
    
    this.getAllLockerServiceDetails();
    this.fform = true;
    
  }

  clickAddEmployee(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;
    this.fform = true;
  } 

  CalculateAge()
    {
        if(this.formValue.value.dob){
          const bdate = new Date(this.formValue.value.dob);

          const timeDiff = Math.abs(Date.now() - bdate.getTime() );
          this.formValue.value.age = Math.floor((timeDiff / (1000 * 3600 * 24)) / 365);

          //  var timeDiff = Math.abs(Date.now() - this.birthdate.getTime());
           //Used Math.floor instead of Math.ceil
           //so 26 years and 140 days would be considered as 26, not 27.
          //  this.agee = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
       }
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
      // alert("Locker Details Added Successfully.")
      this.toast.success({detail:'Success',summary:'Locker Details Added Successfully.',duration:3000})
      
      let ref = document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllLockerServiceDetails();
    },
    err=>{
      // alert("Something went wrong with insert");
      this.toast.error({detail:'Error Message',summary:'Something went wrong with insert!!',duration:3000, sticky:true,position:'tr'})
    })
  }

  postNomineeDetails(){
    

    this.lockerServiceModelObj.acnum = this.formValue.value.acnum;
    // this.lockerServiceModelObj.fk_relid = this.formValue.value.fk_relid;
    this.lockerServiceModelObj.nomi = this.formValue.value.nomi;
    this.lockerServiceModelObj.nomin = this.formValue.value.nomin;
    this.lockerServiceModelObj.nomip = this.formValue.value.nomip;
    this.lockerServiceModelObj.nomir = this.formValue.value.nomir;
    this.lockerServiceModelObj.nomii = this.formValue.value.nomii;
    this.lockerServiceModelObj.nomiin = this.formValue.value.nomiin;
    this.lockerServiceModelObj.nomiip = this.formValue.value.nomiip;
    this.lockerServiceModelObj.nomiir = this.formValue.value.nomiir;

    this.api.postNominee(this.lockerServiceModelObj)
    .subscribe(res => {
      console.log(res);
      // alert("Nominee Details Added Successfully.")
      this.toast.success({detail:'Success',summary:'Nominee Details Added Successfully.',duration:3000})
 let ref = document.getElementById('cancel')
      ref?.click();
      // this.formValue.reset();
      this.getAllNomineeDetails();
    },
    err=>{
      // alert("Something went wrong with insert of nominee");
      this.toast.error({detail:'Error Message',summary:'Something went wrong with insertion of nominee!!',duration:3000, sticky:true,position:'tr'})
    })
  }
  getAllLockerServiceDetails(){
      this.api.getEmployee()
      .subscribe( res => {
        this.lockerServiceData = res;
        this.showAdd = true;
        
      })
    }
    getAllNomineeDetails(){
      this.api.getNominee()
      .subscribe( res => {
        this.nomineeData = res;
        // this.lockerServiceData= res;
        this.showAdd = true;       
      })
    }
  deleteLockerServiceData(res : any){
      this.api.deleteEmployee(res.relid)
      .subscribe(res => {       
        // alert("Deleted");
        this.toast.success({detail:'Success',summary:'Deleted Successfully.',duration:3000})
        this.getAllLockerServiceDetails();
      })
    }
    deleteNoimneeData(res : any){
      this.api.deleteNominee(res.nid)
      .subscribe(res => {        
        // alert("Deleted");
        this.toast.success({detail:'Success',summary:'Deleted Successfully.',duration:3000})
        this. getAllNomineeDetails();
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
      // this.formValue.controls['acnum'].patchValue(row.actnum);
      this.formValue.controls['acnum'].patchValue(this.lockerServiceModelObj.actnum);
      this.formValue.controls['fk_relid'].patchValue(this.lockerServiceModelObj.relid);
      this.showAdd= false;
      this.showUpdate= true;
      this.fform = true;
      this.record= false
      this.toast.success({detail:'Searching Successful!',summary:'Data Get On The Form Successfully.',duration:3000})   
    }
    getOnNomiForm(row: any){
      this.lockerServiceModelObj.nid = row.nid;
      // this.formValue.controls['fk_relid'].patchValue(row.relid);
      this.formValue.controls['acnum'].patchValue(row.actnum);
      this.formValue.controls['nomi'].patchValue(row.nomi);
      this.formValue.controls['nomin'].patchValue(row.nomin);
      this.formValue.controls['nomip'].patchValue(row.nomip);
      this.formValue.controls['nomir'].patchValue(row.nomir);
      this.formValue.controls['nomii'].patchValue(row.nomii);
      this.formValue.controls['nomiin'].patchValue(row.nomiin);
      this.formValue.controls['nomiip'].patchValue(row.nomiip);
      this.formValue.controls['nomiir'].patchValue(row.nomiir);
      this.showAdd= false;
      this.showUpdate= true;
      this.fform = true;
      this.record= false
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
        // alert("Update Successfully")
        this.toast.success({detail:'Success',summary:'Data Update Successfully.',duration:3000})
        let ref=document.getElementById("cancel")
        ref?.click();
        this.formValue.reset();
        this.getAllLockerServiceDetails();
        this.showUpdate=false;
      },
        err=>{
          // alert("Something wrong in update");
          this.toast.error({detail:'Error',summary:'Something wrong in update.',duration:3000, sticky:true,position:'tr'})
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
 updateNomineeDetails(){
  this.lockerServiceModelObj.acnum = this.formValue.value.acnum;
  // this.lockerServiceModelObj.fk_relid = this.formValue.value.fk_relid;
  this.lockerServiceModelObj.nomi = this.formValue.value.nomi;
  this.lockerServiceModelObj.nomin = this.formValue.value.nomin;
  this.lockerServiceModelObj.nomip = this.formValue.value.nomip;
  this.lockerServiceModelObj.nomir = this.formValue.value.nomir;
  this.lockerServiceModelObj.nomii = this.formValue.value.nomii;
  this.lockerServiceModelObj.nomiin = this.formValue.value.nomiin;
  this.lockerServiceModelObj.nomiip = this.formValue.value.nomiip;
  this.lockerServiceModelObj.nomiir = this.formValue.value.nomiir;

     this.api.updateNominee(this.lockerServiceModelObj,this.lockerServiceModelObj.nid)
     .subscribe(res=>{
      // alert("Nominee Update Successfully")
      this.toast.success({detail:'Success',summary:'Nominee Update Successfully.',duration:3000})
      let ref=document.getElementById("cancel")
      ref?.click();
      // this.formValue.reset();
      this.getAllNomineeDetails();
      this.showUpdate=false;
    },
      err=>{
        // alert("Something wrong in update of nominee");
        this.toast.error({detail:'Error',summary:'Nominee Update Failed!',duration:3000, sticky:true,position:'tr'})
      })
}
    onKeyPress(event : any){
      // console.log("Event Succefully");
      this.lockerServiceModelObj.relid=this.formValue.value.relid;
      // console.log(this.lockerServiceModelObj.relid);
      
      this.api.getByIdRelease(this.lockerServiceModelObj.relid)
      .subscribe(res=>{
        console.log(res);
        this.getOnForm(res);
        this.getOnNomiForm(res);
        this.formValue.controls['acnum'].patchValue(this.lockerServiceModelObj.actnum);
        // this.formValue.controls['fk_relid'].patchValue(this.lockerServiceModelObj.relid);
      },
      err=>{
        // alert("Searching ID Is Not Found. Kindly Check The ID Number Again!");
        this.toast.error({detail:'Search Error',summary:'Not Found. Kindly Check The ID Number Again!',duration:3000, sticky:true,position:'tr'})
      })
    }
    // function ageCalculator() {
    //   var userinput =document.getElementById("DOB")?.nodeValue; 
    //   if(userinput==null || userinput==''){  
    //     document.getElementById("message").innerHTML = "**Choose a date please!";    
    //     return false;   
    //   }     
    // }
      hideForm(){
      this.showform=true; 
      this.niform=false;
    }
    hideNomineeInformation(){
      this.niform=true; 
      this.showform=false;
    }
     close(){
      this.niform=false;
      this.showform=false;
     }
     showRecord(){
       this.record=true;
       this.fform=false;
       this.showAdd=false;  
       this.toast.success({detail:'Records ',summary:'Showing Records Successfully.',duration:1000})   
     }
     key: any = 'relid';
     reverse: boolean = false;
     sort(key : any){
       this.key = key;
       this.reverse = !this.reverse;
     }
     pageChanged(event: any) {
      this.config.currentPage = event;
    }
    showFformm(){
      this.fform=true;
      this.record=false;
      this.showAdd=true;
    }
}
import { Grid, Sort,  Search, Toolbar } from '@syncfusion/ej2-grids';
Grid.Inject(Sort,  Search, Toolbar);
let grid: Grid = new Grid({
    dataSource: LockerServiceModel,
    allowSorting: true,
    sortSettings: { columns: [{ field: 'relid', direction: 'Ascending' }, { field: 'actype', direction: 'Descending' }] },
    toolbar: ['Search'],
    searchSettings: { fields: ['CustomerID'], operator: 'contains', key: 'Ha', ignoreCase: true },
    columns: [
        { field: 'relid', headerText: 'relid', textAlign: 'Right', width: 120 },
        { field: 'oprbrancd', headerText: 'Customer ID', width: 150 },
        { field: 'cuscod', headerText: 'Ship City', width: 150 },
        { field: 'brancd', headerText: 'Ship Name', width: 150 },
        
    ],
    height: 315,
}
);
grid.appendTo('#Grid');