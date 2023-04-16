import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { CustomCardModel } from '../../../redux/state.models';
import { VideoType } from '../../models/util.model';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss']
})
export class SearchItemComponent {
  @Input() searchItem!: SearchItem | CustomCardModel;

  constructor(private router: Router) {
  }

  get itemImage() {
    if (this.searchItem.itemType === VideoType.Youtube) {
      const { thumbnails } = this.searchItem.snippet;
      return (thumbnails.maxres || thumbnails.high).url;
    }
    return this.searchItem.imgLink;
  }

  get title() {
    if (this.searchItem.itemType === VideoType.Youtube) {
      return this.searchItem.snippet.title;
    }
    return this.searchItem.title;
  }

  get releaseDate() {
    if (this.searchItem.itemType === VideoType.Youtube) {
      return this.searchItem.snippet.publishedAt;
    }
    return this.searchItem.creationDate;
  }

  navigateToDetails() {
    const id = typeof this.searchItem.id === 'string' ? this.searchItem.id : this.searchItem.id.videoId;
    this.router.navigate(['videos', id]);
  }

  protected readonly VideoType = VideoType;
}
