import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './Employee';
import { Cartoon } from './Cartoon';
import { login } from './login';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http:HttpClient) { }

  //strUrl="http://localhost:3000/Employee";
  strUrl="http://localhost:8000";

  getAllLogin():Observable<any>{
    let strGetUrl = this.strUrl + "/getAllUsers";
    return this.http.get<string>(strGetUrl);
  }

  insertLogin(loginObj : login):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    const loginRec = JSON.stringify(loginObj);
    let strGetUrl = this.strUrl + "/insertUsersRecord";
    return this.http.post<string>(strGetUrl, loginRec, {'headers' : headers, responseType:'text' as 'json'});
  }

  getAllEmployeesFromService():Observable<any>{
    let strGetUrl = this.strUrl  + "/getAllEmployees";
    return this.http.get(strGetUrl);
  }

  insertEmployeeRecord(empObj : Employee):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    const empRec = JSON.stringify(empObj);
    let strGetUrl = this.strUrl  + "/insertEmployeeRecord";
    return this.http.post<string>(strGetUrl, empRec, {'headers' : headers, responseType:'text' as 'json'})
  }

  updateEmployeeRecord(empObj : Employee):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    const empRec = JSON.stringify(empObj);
    let strGetUrl = this.strUrl  + "/updateEmployeeData";
    return this.http.put<string>(strGetUrl, empRec, {'headers' : headers, responseType:'text' as 'json'})
  }

  deleteEmployeeRecord(id : number):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    let strGetUrl = this.strUrl  + "/deleteRecord/" + id;
    return this.http.delete<string>(strGetUrl, {'headers' : headers, responseType:'text' as 'json'})
  }

  getAllCartoonsFromService():Observable<any>{
    let strGetUrl = this.strUrl  + "/getAllCartoons";

    return this.http.get(strGetUrl);
  }

  insertCartoonRecord(carObj : Cartoon):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    const carRec = JSON.stringify(carObj);
    let strGetUrl = this.strUrl  + "/insertCartoonRecord";
    return this.http.post<string>(strGetUrl, carRec, {'headers' : headers, responseType:'text' as 'json'})
  }

  updateCartoonRecord(carObj : Cartoon):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    const carRec = JSON.stringify(carObj);
    let strGetUrl = this.strUrl  + "/updateCartoonData";
    return this.http.put<string>(strGetUrl, carRec, {'headers' : headers, responseType:'text' as 'json'})
  }

  deleteCartoonRecord(id : number):Observable<string>{
    const headers = {'content-type' : 'application/json'};
    let strGetUrl = this.strUrl  + "/deleteRecord/" + id;
    return this.http.delete<string>(strGetUrl, {'headers' : headers, responseType:'text' as 'json'})
  }

}
