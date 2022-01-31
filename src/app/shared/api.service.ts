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
}




