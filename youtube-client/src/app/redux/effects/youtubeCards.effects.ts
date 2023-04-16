import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { YoutubeService } from '../../youtube/services/youtube.service';
import { YoutubeCardsActions } from '../actions/yootubeCards.actions';
import { VideoType } from '../../youtube/models/util.model';

@Injectable()
export class YoutubeCardsEffects {
  constructor(
    private actions$: Actions,
    private youtubeService: YoutubeService
  ) {}

  loadCards$ = createEffect(() => this.actions$.pipe(
    ofType(YoutubeCardsActions.getAll),
    switchMap(({ searchValue }) => this.youtubeService.findVideos(searchValue)
      .pipe(
        map(videos => {
          const mappedItems = videos.items.map(item => ({ ...item, itemType: VideoType.Youtube }));
          return { ...videos, items: mappedItems };
        }),
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        map(videos => YoutubeCardsActions.getAllSuccess({ cards: videos.items }))
      ))
  ));
}
