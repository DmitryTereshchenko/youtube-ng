import { Component, EventEmitter, Output } from '@angular/core';
import { YoutubeService } from '../../../youtube/services/youtube.service';
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private youtubeService: YoutubeService, private authService: AuthService) {}

  onSettingsClick() {
    this.youtubeService.toggleFilteringVisibility();
  }

  onLogoutButtonClick() {
    this.authService.logout();
  }
}
