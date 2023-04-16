import { VideoType } from '../youtube/models/util.model';
import { SearchItem } from '../youtube/models/search-item.model';

export interface CustomCardModel {
  id: string;
  itemType: VideoType.Custom,
  title: string;
  description: string;
  imgLink: string;
  videoLink: string;
  creationDate: string;
}

export interface AppState {
  customCards: CardState<CustomCardModel>;
  youtubeCards: CardState<SearchItem>;
}
export interface CardState<T extends object> {
  cards: T[];
  isError: boolean;
  isLoading: boolean;
}
