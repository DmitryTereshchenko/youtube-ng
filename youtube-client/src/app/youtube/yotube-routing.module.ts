import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule } from '@angular/router';
import { MainPageComponent } from './pages/main/main-page.component';
import { DetailsPageComponent } from './pages/details/details-page.component';

const routes: Route[] = [
  { path: '', component: MainPageComponent },
  { path: ':id', component: DetailsPageComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class YotubeRoutingModule { }
