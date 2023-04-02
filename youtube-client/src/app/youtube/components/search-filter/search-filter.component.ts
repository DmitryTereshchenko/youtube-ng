import { Component } from '@angular/core';
import { SortingCriteria, SortingDirection } from '../../models/sorting.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-filter',
  templateUrl: './search-filter.component.html',
  styleUrls: ['./search-filter.component.scss']
})
export class SearchFilterComponent {
  filterInputValue = '';
  currentCriteria: SortingCriteria | null = null;
  sortingDirection: SortingDirection = 'asc';

  constructor(private youtubeService: YoutubeService) {}

  onSortingHandler(criteria: SortingCriteria) {
    if (this.currentCriteria === criteria) {
      this.sortingDirection = this.sortingDirection === 'asc' ? 'desc' : 'asc';
    } else {
      this.sortingDirection = 'asc';
    }

    this.currentCriteria = criteria;
    this.youtubeService.sortVideos({ criteria, direction: this.sortingDirection });
  }

  onFilteringChanged() {
    this.youtubeService.filterVideos(this.filterInputValue);
  }
}
