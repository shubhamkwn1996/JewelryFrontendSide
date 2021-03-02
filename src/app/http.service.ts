import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserInformation } from './modal/userInformation';
import { environment } from '../../src/environments/environment';
@Injectable({
  providedIn: 'root'
})


export class HttpService {

  baseUrl: string = environment.baseUrl;
  constructor(private http: HttpClient, private router: Router) {
  }
  
  postReqUnauth(url: string, body: UserInformation): Observable<UserInformation> {
    debugger;
    const reqUrl = this.baseUrl + url;
    const headers = { 'content-type': 'application/json', 'Accept': 'application/json','Access-Control-Allow-Origin': '*'}
    return this.http.post<UserInformation>(reqUrl, body, {'headers':headers})
    .pipe(res => res, err=> err);     
  }
}
