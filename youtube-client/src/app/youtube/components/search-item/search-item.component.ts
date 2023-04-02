import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() searchItem!: SearchItem;

  constructor(private router: Router) {}

  get itemImage() {
    return this.searchItem.snippet.thumbnails.medium.url;
  }

  get title() {
    return this.searchItem.snippet.localized.title;
  }

  get releaseDate() {
    return this.searchItem.snippet.publishedAt;
  }

  navigateToDetails() {
    this.router.navigate(['videos', this.searchItem.id]);
  }
}
