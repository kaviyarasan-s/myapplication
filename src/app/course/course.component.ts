import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses: any = [];

  title: string = "Course Details";

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  courseForm = this.formBuilder.group({
    courseName: ['', Validators.required],
    price: ['',Validators.required]
  });

  addCourse() {
    this.courses.push(this.courseForm.value);
    alert("Course details added successfully!!!");
    this.courseForm.patchValue({
      courseName: '',
      price: ''
    });
  }

  clear() {
    this.courses = [];
  }
}
