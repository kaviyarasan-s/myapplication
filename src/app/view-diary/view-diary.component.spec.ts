import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewDiaryComponent } from './view-diary.component';

describe('ViewDiaryComponent', () => {
  let component: ViewDiaryComponent;
  let fixture: ComponentFixture<ViewDiaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewDiaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewDiaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
