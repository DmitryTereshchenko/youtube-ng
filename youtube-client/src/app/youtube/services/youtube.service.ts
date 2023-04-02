import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import mockVideos from '../constants/mock-response.json';
import { SearchResponse } from '../models/search-response.model';
import { SearchItem } from '../models/search-item.model';
import { Sorting, SortingDirection } from '../models/sorting.model';
import { FilteringPipe } from '../pipes/filtering.pipe';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  isResultsVisible = false;
  isFilterBlockVisible = false;
  videoItems: SearchItem[] = [];
  videos$: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([]);
  constructor() {
    this.initVideos();
  }

  getVideos(): Observable<SearchItem[]> {
    this.videos$.next(this.videoItems);
    return this.videos$;
  }

  getVideoById(id: string) {
    return this.videoItems.find(item => item.id === id);
  }

  initVideos() {
    this.videoItems = (<SearchResponse>mockVideos).items;
    this.videos$.next(this.videoItems);
  }

  toggleResultsVisibility() {
    this.isResultsVisible = true;
  }

  toggleFilteringVisibility() {
    this.isFilterBlockVisible = !this.isFilterBlockVisible;
  }

  filterVideos(keyword: string) {
    this.initVideos();
    this.videoItems = new FilteringPipe().transform(this.videoItems, keyword);
    this.videos$.next(this.videoItems);
  }

  sortVideos(sortingParameters: Sorting) {
    if (!sortingParameters) return this.videoItems;

    switch (sortingParameters.criteria) {
      case 'date':
        return this.sortByDate(sortingParameters.direction);
      case 'viewsCount':
        return this.sortByViews(sortingParameters.direction);
      default: return this.videoItems;
    }
  }

  private sortByDate(direction: SortingDirection) {
    return this.videoItems.sort((a, b) => {
      const dateA = Date.parse(a.snippet.publishedAt);
      const dateB = Date.parse(b.snippet.publishedAt);
      return direction === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  private sortByViews(direction: SortingDirection) {
    return this.videoItems.sort((a, b) => {
      const viewCountA = +a.statistics.viewCount;
      const viewCountB = +b.statistics.viewCount;

      return direction === 'asc' ? viewCountA - viewCountB : viewCountB - viewCountA;
    });
  }
}
