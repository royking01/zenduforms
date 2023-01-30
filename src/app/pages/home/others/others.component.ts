import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { takeWhile } from 'rxjs';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
})
export class OthersComponent implements OnDestroy {
  id: string = '';
  componentActive = true;
  constructor(private route: ActivatedRoute) {
    this.route.params
      .pipe(takeWhile(() => this.componentActive))
      .subscribe((param) => {
        this.id = param['id'];
      });
  }
  ngOnDestroy(): void {
    this.componentActive = false;
  }
}
