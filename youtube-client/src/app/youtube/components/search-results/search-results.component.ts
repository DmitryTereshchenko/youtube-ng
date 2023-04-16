import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCustomCards } from '../../../redux/selectors/customCards.selector';
import { selectYoutubeCards } from '../../../redux/selectors/youtubeCards.selector';
import { SearchItem } from '../../models/search-item.model';
import { CustomCardModel } from '../../../redux/state.models';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  items$!: Observable<(CustomCardModel | SearchItem)[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.items$ = combineLatest(
      this.store.select(selectCustomCards),
      this.store.select(selectYoutubeCards),
      (customCards, youtubeCards) => [...customCards, ...youtubeCards]
    );
  }
}
