import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';



@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SearchModule { }
