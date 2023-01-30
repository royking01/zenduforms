import { Component } from '@angular/core';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.scss'],
})
export class SubmissionsComponent {
  selectForm = 'Select Form';
  selectStatus = 'Select status';
  date = new Date();
  options = ['Map', 'List'];
}
