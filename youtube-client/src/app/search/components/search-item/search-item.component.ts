import { Component, Input } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent {
  @Input('item') searchItem!: SearchItem;

  get itemImage() {
    return this.searchItem.snippet.thumbnails.medium.url;
  }

  get title() {
    return this.searchItem.snippet.localized.title;
  }

  get releaseDate() {
    return new Date(Date.parse(this.searchItem.snippet.publishedAt));
  }
}
