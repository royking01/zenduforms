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
  showDatePicker = false;

  toggleDatePicker() {
    this.showDatePicker = !this.showDatePicker;
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
