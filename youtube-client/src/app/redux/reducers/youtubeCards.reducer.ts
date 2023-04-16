import { createReducer, on } from '@ngrx/store';
import { CardState } from '../state.models';
import { SearchItem } from '../../youtube/models/search-item.model';
import { YoutubeCardsActions } from '../actions/yootubeCards.actions';

const initialState: CardState<SearchItem> = {
  cards: [],
  isLoading: false,
  isError: false
};

export const youtubeCardsReducer = createReducer(
  initialState,
  on(
    YoutubeCardsActions.getAll,
    (state): CardState<SearchItem> => ({ ...state, isLoading: true })
  ),
  on(
    YoutubeCardsActions.getAllSuccess,
    (state, { cards }): CardState<SearchItem> => ({ ...state, cards, isLoading: false })
  )
);
