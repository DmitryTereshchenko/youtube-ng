import {
  AfterViewInit, Component, ElementRef, ViewChild
} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter, fromEvent, map, tap
} from 'rxjs';
import { Store } from '@ngrx/store';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import { YoutubeCardsActions } from '../../../redux/actions/yootubeCards.actions';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  constructor(private youtubeService: YoutubeService, private store: Store) {
  }

  ngAfterViewInit(): void {
    this.onInputValueChanged();
  }

  onInputValueChanged() {
    fromEvent<InputEvent>(this.searchInput.nativeElement, 'input')
      .pipe(
        map(e => (e.target as HTMLInputElement).value),
        debounceTime(500),
        distinctUntilChanged(),
        filter(val => val.length >= 3),
        tap(val => this.store.dispatch(YoutubeCardsActions.getAll({ searchValue: val })))
      ).subscribe();
  }
}
