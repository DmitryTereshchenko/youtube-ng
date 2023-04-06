import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';
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
    this.activatedRoute.paramMap
      .pipe(
        map(param => param.get('id') || ''),
        switchMap(id => this.youtubeService.getVideoById(id))
      )
      .subscribe(result => {
        if (!result) {
          this.router.navigate(['/404']);
        }
        // eslint-disable-next-line prefer-destructuring
        this.item = result.items[0];
      });
  }

  onBackButtonClick() {
    this.router.navigate(['videos']);
  }
}
