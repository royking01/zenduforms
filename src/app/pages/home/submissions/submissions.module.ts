import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { SubmissionsRoutingModule } from './submissions-routing.module';
import { SubmissionsComponent } from './submissions.component';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { SubmissionCardsListComponentModule } from '../../../components/submission-cards-list/submission-cards-list.component';
import { MapComponentModule } from '../../../components/map/map.component';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { FormsModule } from '@angular/forms';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzSegmentedModule } from 'ng-zorro-antd/segmented';

@NgModule({
  declarations: [SubmissionsComponent],
  imports: [
    CommonModule,
    FormsModule,
    SubmissionsRoutingModule,
    NzDropDownModule,
    NzIconModule,
    SubmissionCardsListComponentModule,
    MapComponentModule,
    NzGridModule,
    NzInputModule,
    NzSelectModule,
    NzDatePickerModule,
    NzSegmentedModule,
  ],
})
export class SubmissionsModule {}
