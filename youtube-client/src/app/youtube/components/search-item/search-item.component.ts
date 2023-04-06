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
    const { thumbnails } = this.searchItem.snippet;
    return thumbnails.maxres || thumbnails.high;
  }

  get title() {
    return this.searchItem.snippet.title;
  }

  get releaseDate() {
    return this.searchItem.snippet.publishedAt;
  }

  navigateToDetails() {
    const id = typeof this.searchItem.id === 'string' ? this.searchItem.id : this.searchItem.id.videoId;
    this.router.navigate(['videos', id]);
  }
}
