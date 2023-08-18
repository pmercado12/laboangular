import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../interfaces';
export const selectFeature = (state: AppStateInterface) => state.products;

export const cartSelector = createSelector(
    selectFeature,
    (state) => state.products
);