import { Component, OnInit, Output , EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonutilService } from '../../services/commonutil.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Output() isLoggedIn = new EventEmitter<boolean>();

  isProfileCration:boolean = false;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private commonutils: CommonutilService
  ) { }

  ngOnInit(): void {
  }

  login() {
    let username = $('#username').val();
    let password = $('#password').val();
    let content = {
      'username': username,
      'password': password
    };
    if (this.validateLoginInputs(content)){
      this.isLoggedIn.emit(true);
      alert('username: ' + content.username + ", " + 'password: ' + content.password);
      // this.checkLoginCredential(content);
      this.router.navigateByUrl('/home');
    }else
      alert('FillOut all fields');

  }

  checkLoginCredential(content) {
    this.loginService.checkLoginCredential(content).subscribe(data => {
      this.router.navigateByUrl('/home');
    });
  }
  goProfile() {
    this.isProfileCration = true;
    // $('#createProfile').click(() => {
    //   this.router.navigateByUrl('/profile');
    // })
  }

  validateLoginInputs(content) {
    let valid: boolean = true;
    if (this.commonutils.isNull(content.username))
      valid = false;
    else if (this.commonutils.isNull(content.password))
      valid = false;
    return valid;
  }

}
