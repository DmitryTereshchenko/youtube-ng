import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';
import { Sorting, SortingDirection } from '../models/sorting.model';

@Pipe({
  name: 'sorting'
})
export class SortingPipe implements PipeTransform {

  transform(value: SearchItem[], sortingParameters: Sorting): SearchItem[] {
    if (!sortingParameters) return value;

    switch(sortingParameters.criteria) {
      case 'date':
        return this.sortByDate(value, sortingParameters.direction);
      case 'viewsCount':
        return this.sortByViews(value, sortingParameters.direction);
      default: return value;
    }
  }

  sortByDate(value: SearchItem[], direction: SortingDirection) {
    return value.sort((a, b) => {
      const dateA = Date.parse(a.snippet.publishedAt);
      const dateB = Date.parse(b.snippet.publishedAt);
      return direction === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  sortByViews(value: SearchItem[], direction: SortingDirection) {
    return value.sort((a, b) => {
      const viewCountA = +a.statistics.viewCount;
      const viewCountB = +b.statistics.viewCount;

      return direction === 'asc' ?  viewCountA - viewCountB : viewCountB - viewCountA;
    });
  }
}
