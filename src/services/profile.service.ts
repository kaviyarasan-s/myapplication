import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { Commonproperties } from '../assets/commonproperties'

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient, private property : Commonproperties) { }


  createProfile(content){
    this.httpClient.post(this.property.url + '/createProfile', content);
  }

  editProfile(content){
    this.httpClient.post(this.property.url + '/editProfile', content);
  }

  deleteProfile(content){
    this.httpClient.post(this.property.url + '/deleteProfile', content);
  }

  getProfile(content){
    this.httpClient.post(this.property.url + '/getProfile', content);
  }

  listAllProfile(content){
    this.httpClient.post(this.property.url + '/listAllProfile', content);
  }
}
