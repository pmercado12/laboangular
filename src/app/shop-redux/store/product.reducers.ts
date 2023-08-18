import { createReducer, on } from "@ngrx/store";
import { ICart } from "../interfaces";
import * as PostsActions from './product.action';

export const initialState: ICart = {
    products: [],
    error: null,
};

export const reducers = createReducer(
    initialState,
    on(PostsActions.getCart, (state) => ({
        ...state,
    })),
    on(PostsActions.postCart, (state, action) => {
        console.log(state,action);
        state = {
            ...state,
            products: [...state.products, action.products]
        }
        console.log(state);
        return state;
    })
);