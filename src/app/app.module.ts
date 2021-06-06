import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApphighlightComponent } from './apphighlight/apphighlight.component';
import { HighlightsDirective } from './highlights.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule } from '@angular/router';
import { DiaryComponent } from './diary/diary.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewDiaryComponent } from './view-diary/view-diary.component';
import { CourseComponent } from './course/course.component';
import { ProductComponent } from './product/product.component';
import { ViewCourseComponent } from './view-course/view-course.component';
import { PowerPipePipe } from './power-pipe.pipe';



const routes: Routes = [
  { path: 'home', component: DiaryComponent },
  { path: 'profile', component: ProfileComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ApphighlightComponent,
    HighlightsDirective,
    LoginComponent,
    DiaryComponent,
    ProfileComponent,
    HomeComponent,
    ViewDiaryComponent,
    CourseComponent,
    ProductComponent,
    ViewCourseComponent,
    PowerPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
