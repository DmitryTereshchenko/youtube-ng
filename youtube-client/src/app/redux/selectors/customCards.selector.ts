import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CardState, CustomCardModel } from '../state.models';

const selectCustomCardsFeature = createFeatureSelector<CardState<CustomCardModel>>('customCards');

export const selectCustomCards = createSelector(
  selectCustomCardsFeature,
  (state) => state.cards
);
