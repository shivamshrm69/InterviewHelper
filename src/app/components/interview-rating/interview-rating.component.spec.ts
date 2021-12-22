import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterviewRatingComponent } from './interview-rating.component';

describe('InterviewRatingComponent', () => {
  let component: InterviewRatingComponent;
  let fixture: ComponentFixture<InterviewRatingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterviewRatingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterviewRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
