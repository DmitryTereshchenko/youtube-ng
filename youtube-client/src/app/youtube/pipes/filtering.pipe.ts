import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {
  transform(value: SearchItem[], keyword: string): SearchItem[] {
    if (!keyword) return value;

    return this.filterItems(value, keyword);
  }

  filterItems(value: SearchItem[], keyword: string) {
    return value.filter((item) => {
      const itemTitle = item.snippet.localized.title;
      return itemTitle.toLowerCase().includes(keyword.toLowerCase());
    });
  }
}
