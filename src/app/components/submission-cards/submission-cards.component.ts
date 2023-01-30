import { CommonModule } from '@angular/common';
import { Component, Input, NgModule } from '@angular/core';
import { ISubmission } from '../../interfaces/submision-interface';

@Component({
  selector: 'app-submission-cards',
  templateUrl: './submission-cards.component.html',
  styleUrls: ['./submission-cards.component.scss'],
})
export class SubmissionCardsComponent {
  @Input() submission!: ISubmission;
}
@NgModule({
  imports: [CommonModule],
  declarations: [SubmissionCardsComponent],
  exports: [SubmissionCardsComponent],
})
export class SubmissionCardsComponentModule {}
