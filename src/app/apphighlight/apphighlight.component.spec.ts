import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApphighlightComponent } from './apphighlight.component';

describe('ApphighlightComponent', () => {
  let component: ApphighlightComponent;
  let fixture: ComponentFixture<ApphighlightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApphighlightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApphighlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
