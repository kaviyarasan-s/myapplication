import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Commonproperties} from '../assets/commonproperties';

@Injectable({
  providedIn: 'root'
})
export class DiaryService {

  constructor(private http:HttpClient, private property : Commonproperties) { }

  addDiaryContent(content): Observable<any>{
    return this.http.post(this.property.url+'/addDiaryContent', content);
  }

  removeOldContent(content){
    return this.http.post(this.property.url+'removeOldDiaryContent', content);
  }

  updateDiaryContent(content){
    return this.http.post(this.property.url+'updateDiaryContent', content);
  }

  listDiaryContent(): Observable<any>{
    return this.http.get(this.property.url+'/listDiaryContent');
  }
}
