import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardState } from '../state.models';
import { SearchItem } from '../../youtube/models/search-item.model';

const selectYoutubeCardsFeature = createFeatureSelector<CardState<SearchItem>>('youtubeCards');

export const selectYoutubeCards = createSelector(
  selectYoutubeCardsFeature,
  (state) => state.cards
);
