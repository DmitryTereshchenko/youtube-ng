import {
  Component, OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { SearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
  items$!: Observable<SearchItem[]>;

  constructor(private videosService: YoutubeService) {}

  ngOnInit() {
    this.items$ = this.videosService.getVideos();
  }
}
