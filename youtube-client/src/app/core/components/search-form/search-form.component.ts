import { Component } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.scss']
})
export class SearchFormComponent {
  searchValue = '';

  constructor(private youtubeService: YoutubeService) {
  }

  onFormSubmit() {
    this.youtubeService.toggleResultsVisibility();
  }
}
