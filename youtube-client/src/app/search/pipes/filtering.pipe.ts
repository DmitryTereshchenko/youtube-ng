import { Pipe, PipeTransform } from '@angular/core';
import { SearchItem } from '../models/search-item.model';

@Pipe({
  name: 'filtering'
})
export class FilteringPipe implements PipeTransform {

  transform(value: SearchItem[], keyword: string): SearchItem[] {
    console.log(keyword);
    if (!keyword) return value;

    return value.filter(item => item.snippet.localized.title.toLowerCase().includes(keyword.toLowerCase()));
  }
}
