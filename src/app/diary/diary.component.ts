import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DiaryService } from '../../services/diary.service';
import { CommonutilService } from '../../services/commonutil.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-diary',
  templateUrl: './diary.component.html',
  styleUrls: ['./diary.component.css']
})
export class DiaryComponent implements OnInit {

  @Output() isFromHome = new EventEmitter<boolean>();

  constructor(
    private diaryService: DiaryService,
    private commonUtils: CommonutilService
  ) { }

  content: any = {};

  addedDiaryContent:any= [];

  isSearchPage = false;
  searchedResult = false;
  showDiaryList:boolean = false;
  createDiary:boolean = true;

  ngOnInit(): void {
    this.isFromHome.emit(true);
  }

  addDiaryContent() {
    let date: any = $('#date').val().trim();
    let diaryContent: any = $('#diaryContent').val().trim();
    this.content = {
      'date': date,
      'diaryContent': diaryContent
    }
    if (this.validateInputFields(this.content)) {
      alert('Selected Date : ' + this.content.date + "," + 'Content : ' + this.content.diaryContent);
      this.clearExistingInputs();
      alert('Content added successfully!!');
      this.addedDiaryContent.push(this.content);
      alert("Content count : " + this.addedDiaryContent.length);
      // this.diaryService.addDiaryContent(this.content).subscribe(data =>
      //   alert(data)
      // );
    }
  }

  updateDiaryContent() {
    let date: any = $('#date').val().trim();
    let diaryContent: any = $('#diaryContent').val().trim();
    this.content = {
      'date': date,
      'diaryContent': diaryContent
    }
    this.diaryService.updateDiaryContent(this.content).subscribe();
  }

  deleteDiaryContent() {
    let date: any = $('#date').val().trim();
    this.content = {
      'date': date
    }
    this.diaryService.removeOldContent(this.content).subscribe();
  }

  listDiaryContent() {
    // this.diaryService.listDiaryContent().subscribe(data => {
    //   console.log(data);
    // });
    this.showDiaryList = true;
    this.createDiary = false;
  }
  searchDiaryContent() {

  }

  validateInputFields(content) {
    let isValid: boolean = true;
    if (this.commonUtils.isNull(content.date)) {
      alert('Please select date.');
      isValid = false;
    } else if (this.commonUtils.isNull(content.diaryContent)) {
      alert('Content is empty!!!');
      isValid = false;
    }
    return isValid;
  }

  clearExistingInputs() {
    $('#date').val('');
    $('#diaryContent').val('');
  }
}
