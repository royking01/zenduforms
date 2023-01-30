import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmissionCardsListComponent } from './submission-cards-list.component';

describe('SubmissionCardsListComponent', () => {
  let component: SubmissionCardsListComponent;
  let fixture: ComponentFixture<SubmissionCardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubmissionCardsListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubmissionCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
