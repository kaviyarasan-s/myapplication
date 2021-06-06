import { Component, OnInit } from '@angular/core';
import { CommonutilService } from '../../services/commonutil.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(
    private commonUtil: CommonutilService
  ) { }

  price: number;

  color: string = "blue";

  ngOnInit(): void {
    this.getSampleData();
  }

  result = {
  };


  getSampleData() {
    this.commonUtil.getSampleResultData().subscribe(
      res => {
        this.result = res
      },
      err => alert(err)
    );
  }
}
