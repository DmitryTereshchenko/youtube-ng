import { Injectable } from '@angular/core';
import {
  BehaviorSubject, from, map, switchMap, toArray
} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SearchResponse } from '../models/search-response.model';
import { ItemId, SearchItem } from '../models/search-item.model';
import { Sorting, SortingDirection } from '../models/sorting.model';
import { FilteringPipe } from '../pipes/filtering.pipe';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private isFilterBlockVisible$ = new BehaviorSubject<boolean>(false);
  private videos$: BehaviorSubject<SearchItem[]> = new BehaviorSubject<SearchItem[]>([]);
  private initialVideos!: SearchItem[];
  constructor(private httpClient: HttpClient) {}

  get isFilterVisible$() {
    return this.isFilterBlockVisible$.asObservable();
  }

  findVideos(searchValue: string) {
    return this.httpClient.get<SearchResponse>('search', {
      params: {
        maxResults: 15,
        q: searchValue,
        type: 'video',
        part: 'snippet'
      }
    })
      .pipe(
        switchMap(response => from(response.items)
          .pipe(
            map(item => item.id as ItemId),
            toArray(),
            switchMap(ids => this.getVideosDetailsByIds(ids))
          ))
      );
  }

  getVideosDetailsByIds(ids: ItemId[]) {
    const idsParam = ids.map(el => el.videoId);
    return this.httpClient.get<SearchResponse>('videos', {
      params: {
        id: idsParam.toString(),
        part: 'statistics, snippet'
      }
    });
  }

  getVideoById(id: string) {
    return this.httpClient.get<SearchResponse>('videos', {
      params: {
        id,
        part: 'statistics, snippet'
      }
    });
  }

  toggleFilteringVisibility() {
    this.isFilterBlockVisible$.next(!this.isFilterBlockVisible$.value);
  }

  filterVideos(keyword: string) {
    const videoItems = new FilteringPipe().transform(this.initialVideos, keyword);
    this.videos$.next(videoItems);
  }

  sortVideos(sortingParameters: Sorting) {
    if (!sortingParameters) return this.initialVideos;

    switch (sortingParameters.criteria) {
      case 'date':
        return this.sortByDate(sortingParameters.direction);
      case 'viewsCount':
        return this.sortByViews(sortingParameters.direction);
      default: return this.initialVideos;
    }
  }

  private sortByDate(direction: SortingDirection) {
    return this.initialVideos.sort((a, b) => {
      const dateA = Date.parse(a.snippet.publishedAt);
      const dateB = Date.parse(b.snippet.publishedAt);
      return direction === 'asc' ? dateA - dateB : dateB - dateA;
    });
  }

  private sortByViews(direction: SortingDirection) {
    return this.initialVideos.sort((a, b) => {
      const viewCountA = +a.statistics.viewCount;
      const viewCountB = +b.statistics.viewCount;

      return direction === 'asc' ? viewCountA - viewCountB : viewCountB - viewCountA;
    });
  }
}
