import { Component, OnInit, Input } from '@angular/core';
// import {CommonService} from '../common.service';

import * as $ from "jquery";

@Component({
  selector: 'app-apphighlight',
  templateUrl: './apphighlight.component.html',
  styleUrls: ['./apphighlight.component.css']
})
export class ApphighlightComponent implements OnInit {

  constructor(
    // private commonService : CommonService
  ) { }
  
  ngOnInit(): void {
    this.add(2);
  }

  color:string = "yellow";
  result:string;
  printResultData(){
    // this.commonService.getData().subscribe(
    // result => {
    //   this.result = result
    // },
    // err=>{
    //   console.log(err.message);
    // },
    // ()=>{
    //   console.log('Testing');
    // });
  }
  title = 'myapplication';
  
    person = {
      authorName:'kaviyarasan',
      age:20
    } 
  
    personArray = [];
  
    addPerson(){
      let personName = $('#personName').val();
      this.personArray.push(personName);
      alert(personName + 'Person Added Successfully!!!');
    }
  
    showpersonList(){
      $('.personlist').removeClass('hide');
    }

    add(a:number,b?:number){
      console.log(a+b);
    }

    
}
