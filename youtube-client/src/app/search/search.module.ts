import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchItemComponent } from './components/search-item/search-item.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { HighlightBorderDirective } from './directives/highlight-border.directive';
import { SearchItemStatisticComponent } from './components/search-item-statistic/search-item-statistic.component';
import { SearchFilterComponent } from './components/search-filter/search-filter.component';
import { SortingPipe } from './pipes/sorting.pipe';
import { FilteringPipe } from './pipes/filtering.pipe';

@NgModule({
  declarations: [
    SearchItemComponent,
    SearchResultsComponent,
    SearchFormComponent,
    HighlightBorderDirective,
    SearchItemStatisticComponent,
    SearchFilterComponent,
    SortingPipe,
    FilteringPipe,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    SearchFormComponent,
    SearchResultsComponent,
    SearchFilterComponent,
  ],
})
export class SearchModule { }
