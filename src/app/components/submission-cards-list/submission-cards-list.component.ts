import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ISubmission } from '../../interfaces/submision-interface';
import { SubmissionCardsComponentModule } from '../submission-cards/submission-cards.component';

@Component({
  selector: 'app-submission-cards-list',
  templateUrl: './submission-cards-list.component.html',
  styleUrls: ['./submission-cards-list.component.scss'],
})
export class SubmissionCardsListComponent {
  submissions: ISubmission[] = [
    {
      workFlow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      status: 'Uncomplete',
    },
    {
      workFlow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      status: 'Low Risk',
    },
    {
      workFlow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      status: 'Uncomplete',
    },
    {
      workFlow: 'Requires Location',
      from: 'denisgordiyenya@gmail.com',
      to: 'denisgordiyenya@gmail.com',
      dueDate: '06 December',
      status: 'Needs Review',
    },
  ];
}

@NgModule({
  imports: [CommonModule, FormsModule, SubmissionCardsComponentModule],
  declarations: [SubmissionCardsListComponent],
  exports: [SubmissionCardsListComponent],
})
export class SubmissionCardsListComponentModule {}
