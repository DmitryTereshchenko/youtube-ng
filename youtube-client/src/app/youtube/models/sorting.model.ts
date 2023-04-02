export interface Sorting {
  criteria: SortingCriteria;
  direction: SortingDirection;
}

export type SortingDirection = 'asc' | 'desc';
export type SortingCriteria = 'date' | 'viewsCount';
