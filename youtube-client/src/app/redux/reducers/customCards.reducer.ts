import { createReducer, on } from '@ngrx/store';
import { CustomCardsActions } from '../actions/customCards.actions';
import { CardState, CustomCardModel } from '../state.models';

const initialState: CardState<CustomCardModel> = {
  cards: [],
  isLoading: false,
  isError: false
};

export const customCardsReducer = createReducer(
  initialState,
  on(
    CustomCardsActions.add,
    (state, card): CardState<CustomCardModel> => ({ ...state, cards: [...state.cards, card] })
  )
);
