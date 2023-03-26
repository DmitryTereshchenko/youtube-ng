import { Component, EventEmitter, Output } from '@angular/core';
import { Sorting, SortingCriteria, SortingDirection } from '../../models/sorting.model';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss'],
})
export class SearchFilterComponent {
  @Output() sortingChanged: EventEmitter<Sorting> = new EventEmitter<Sorting>();

  @Output() filteringChanged: EventEmitter<string> = new EventEmitter<string>();

  filterInputValue = '';

  currentCriteria: SortingCriteria | null = null;

  sortingDirection: SortingDirection = 'asc';

  onSortingHandler(criteria: SortingCriteria) {
    if (this.currentCriteria === criteria) {
      this.sortingDirection = this.sortingDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortingDirection = 'asc';
    }

    this.currentCriteria = criteria;
    this.sortingChanged.emit({ criteria, direction: this.sortingDirection });
  }

  onFilteringChanged() {
    this.filteringChanged.emit(this.filterInputValue);
  }
}
