import { createActionGroup, props } from '@ngrx/store';
import { CustomCardModel } from '../state.models';

export const CustomCardsActions = createActionGroup({
  source: 'Custom Cards',
  events: {
    Add: props<CustomCardModel>()
  }
});
