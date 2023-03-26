import { Component, Input, OnChanges, OnInit } from '@angular/core';
import mockResponse from '../../constants/mock-response.json';
import { SearchItem } from '../../models/search-item.model';
import { SearchResponse } from '../../models/search-response.model';
import { Sorting } from '../../models/sorting.model';
import { FilteringPipe } from '../../pipes/filtering.pipe';
import { SortingPipe } from '../../pipes/sorting.pipe';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit, OnChanges {
  @Input() sortingParameters!: Sorting;
  @Input() filteringParameter!: string;

  mockItems = (<SearchResponse>mockResponse).items;
  filteredItems: SearchItem[] = [];

  ngOnInit() {
    this.filteredItems = this.mockItems;
  }

  ngOnChanges() {
    const filteredElements = new FilteringPipe().transform(this.mockItems, this.filteringParameter);
    this.filteredItems = new SortingPipe().transform(filteredElements, this.sortingParameters);
  }
}
