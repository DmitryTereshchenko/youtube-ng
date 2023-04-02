import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent {
  constructor(private youtubeService: YoutubeService) {
  }

  get isResultsVisible() {
    return this.youtubeService.isResultsVisible;
  }

  get isFilterVisible() {
    return this.youtubeService.isFilterBlockVisible;
  }
}
