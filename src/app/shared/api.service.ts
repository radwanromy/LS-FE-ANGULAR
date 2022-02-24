import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postEmployee(data: any){
    return this.http.post<any>("http://localhost:9090/api/posts/post/", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getEmployee(){
    return this.http.get<any>("http://localhost:9090/api/posts/getRelease/")
    .pipe(map((res: any) => {
      return res;
    }))
  }

  updateEmployee(data: any, relid: number){
    return this.http.put<any>("http://localhost:9090/api/posts/"+relid, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteEmployee(relid: number){
    return this.http.delete<any>("http://localhost:9090/api/posts/"+relid)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getByIdRelease(relid : number){
    return this.http.get("http://localhost:9090/api/posts/"+relid);   
  }
  postNominee(data: any){
    return this.http.post<any>("http://localhost:9090/api/nomis/nomi/", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  getNominee(){
    return this.http.get<any>("http://localhost:9090/api/nomis/getNomi/")
    .pipe(map((res: any) => {
      return res;
    }))
  }

  updateNominee(data: any, nid: number){
    return this.http.put<any>("http://localhost:9090/api/nomis/"+nid, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }

  deleteNominee(nid: number){
    return this.http.delete<any>("http://localhost:9090/api/nomis/"+nid)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getByIdNominee(nid : number){
    return this.http.get("http://localhost:9090/api/nomis/"+nid);   
  }
 //New Allocation Backend 
  postAllocation(data: any){
    return this.http.post<any>("http://localhost:8888/api/LSM/DrawerAllocate/Allocate", data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getAllocation(){
    return this.http.get<any>("http://localhost:8888/api/LSM/DrawerAllocate/Get/")
    .pipe(map((res: any) => {
      return res;
    }))
  }
  updateAllocation(data: any, actnum: any){
    return this.http.put<any>("http://localhost:8888/api/LSM/DrawerAllocate/"+actnum, data)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  deleteAllocation(actnum: any){
    return this.http.delete<any>("http://localhost:8888/api/LSM/DrawerAllocate/"+actnum)
    .pipe(map((res: any) => {
      return res;
    }))
  }
  getByIdAllocation(actnum : any){
    return this.http.get("http://localhost:8888/api/LSM/DrawerAllocate/"+actnum);   
  }

}




