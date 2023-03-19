import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchFormComponent } from './components/search-form/search-form.component';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SearchFormComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SearchFormComponent,
    SearchResultsComponent
  ],
})
export class SearchModule { }
