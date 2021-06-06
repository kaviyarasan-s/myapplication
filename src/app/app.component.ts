import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private router : Router
  ){}

  ngOnInit () :void {
    this.router.navigateByUrl("/");
  }

   isLoggedIn:boolean = false;


   setLoggedInfo($event){
     this.isLoggedIn = $event;
     alert('Logged in successfully !!' + this.isLoggedIn)
   }

   setHomePageAttribute($event){
    this.isLoggedIn = $event;
    alert('Logged in successfully !!' + this.isLoggedIn)
   }
}
