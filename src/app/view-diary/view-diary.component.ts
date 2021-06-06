import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-view-diary',
  templateUrl: './view-diary.component.html',
  styleUrls: ['./view-diary.component.css']
})
export class ViewDiaryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() addedDiaryContent:any = [];
}
