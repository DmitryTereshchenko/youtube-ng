import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private youtubeService: YoutubeService) {
  }

  get isFilterVisible() {
    return this.youtubeService.isFilterVisible$;
  }
}
