import {
  AfterViewInit, Component, ElementRef, ViewChild
} from '@angular/core';
import {
  debounceTime, distinctUntilChanged, filter, fromEvent, map, switchMap
} from 'rxjs';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent implements AfterViewInit {
  @ViewChild('searchInput', { static: true }) searchInput!: ElementRef;
  constructor(private youtubeService: YoutubeService) {
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
        switchMap(val => this.youtubeService.findVideos(val))
      ).subscribe();
  }
}
