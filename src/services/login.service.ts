import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commonproperties} from '../assets/commonproperties';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient : HttpClient, private property : Commonproperties) { }

  checkLoginCredential(content): Observable<any> {
    return this.httpClient.post(this.property.url + '/checkLoginCredential',content);
  }
}
