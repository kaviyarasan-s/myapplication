import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonutilService {

  constructor(
    private httpClient: HttpClient
  ) { }

  isNotNull(content) {
    if (content != null || content != undefined || content != "")
      return true;
    return false;
  }

  isNull(content) {
    if (content == null || content == undefined || content == "")
      return true;
    return false;
  }

  getSampleResultData(): Observable<any> {
    return this.httpClient.get('assets/result.json');
  }
}
