import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProfileService } from '../../services/profile.service';
import { CommonutilService } from "../../services/commonutil.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profileForm: FormGroup = new FormGroup({
    displayName: new FormControl('', Validators.required),
    dob: new FormControl(''),
    address: new FormControl(''),
    userName: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  });

  constructor(
    private profileService: ProfileService,
    private commonUtil: CommonutilService) { }

  ngOnInit(): void {

  }

  createProfile() {
    if (this.validateInputFields()){
      alert("User created successfully : " + this.profileForm.get("displayName").value );
      this.clearInputFields();
    }

  }

  editProfile() {
    let content;
    this.profileService.editProfile(content);
  }


  validateInputFields() {
    let valid: boolean = true;
    if (this.commonUtil.isNull(this.profileForm.get("displayName").value)) {
      alert("Enter display name");
      valid = false;
    } else if (this.commonUtil.isNull(this.profileForm.get("userName").value)) {
      alert("Enter user name");
      valid = false;
    } else if (this.commonUtil.isNull(this.profileForm.get("password").value)) {
      alert("Enter password");
      valid = false;
    }
    return valid;
  }

  clearInputFields(){
    this.profileForm.patchValue({
      displayName:'',
      dob: '',
      address: '',
      userName: '',
      password: ''
    })
  }
}