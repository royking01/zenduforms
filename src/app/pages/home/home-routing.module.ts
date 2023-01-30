import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'submissions',
        pathMatch: 'full',
        loadChildren: () =>
          import('./submissions/submissions.module').then(
            (m) => m.SubmissionsModule
          ),
      },
      {
        path: ':id',
        loadChildren: () =>
          import('./others/others.module').then((m) => m.OthersModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
