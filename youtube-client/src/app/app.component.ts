import { Component } from '@angular/core';
import { Sorting } from './search/models/sorting.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sortingParameters: Sorting = {} as Sorting;
  filteringParameter: string = '';
  isFilteringVisible = false;
  isSearchResultVisible = false;

  onFilterVibilityChanged(isVisible: boolean) {
    this.isFilteringVisible = isVisible;
  }

  onSearchSubmit(searchValue: string) {
    this.isSearchResultVisible = true;
  }

  onSortingChanged(sortingValue: Sorting) {
    this.sortingParameters = sortingValue;
  }

  onFilteringChanged(filterValue: string) {
    this.filteringParameter = filterValue;
  }
}
