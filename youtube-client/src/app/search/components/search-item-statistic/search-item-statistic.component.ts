import { Component, Input, OnInit } from '@angular/core';
import { SearchItem } from '../../models/search-item.model';

interface IconItem {
  imgPath: string;
  value: number;
}

@Component({
  selector: 'app-search-item-statistic',
  templateUrl: './search-item-statistic.component.html',
  styleUrls: ['./search-item-statistic.component.scss']
})
export class SearchItemStatisticComponent implements OnInit {
  @Input() item!: SearchItem;
  iconItems: IconItem[] = [];

  ngOnInit() {
    this.iconItems = this.generateIcons();
  }

  generateIcons(): IconItem[] {
    const { statistics: { commentCount, likeCount, dislikeCount, viewCount } } = this.item;
    return [
      { imgPath: 'assets/viewed.svg', value: +viewCount },
      { imgPath: 'assets/liked.svg', value: +likeCount },
      { imgPath: 'assets/dislike.svg', value: +dislikeCount },
      { imgPath: 'assets/comments.svg', value: +commentCount }
    ];
  }
}
