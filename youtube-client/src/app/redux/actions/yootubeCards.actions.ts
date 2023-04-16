import { createActionGroup, props } from '@ngrx/store';
import { SearchItem } from '../../youtube/models/search-item.model';

export const YoutubeCardsActions = createActionGroup({
  source: 'Youtube Cards',
  events: {
    'Get All': props<{ searchValue: string }>(),
    'Get All Success': props<{ cards: SearchItem[] }>()
  }
});
