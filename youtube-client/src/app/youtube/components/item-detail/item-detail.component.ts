import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItem } from '../../models/search-item.model';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit {
  item!: SearchItem;
  constructor(
    private youtubeService: YoutubeService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
  }

  get releaseDate() {
    return this.item.snippet.publishedAt;
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(item => {
      const id = item.get('id') || '';
      const currentVideo = this.youtubeService.getVideoById(id);
      if (!currentVideo) {
        this.router.navigate(['/404']);
        return;
      }
      this.item = currentVideo;
    });
  }

  onBackButtonClick() {
    this.router.navigate(['videos']);
  }
}
