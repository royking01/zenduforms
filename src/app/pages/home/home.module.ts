import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponentModule } from 'src/app/components/header/header.component';
import { NzIconModule } from 'ng-zorro-antd/icon';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HeaderComponentModule,
    NzIconModule,
  ],
})
export class HomeModule {}
