import { createReducer, on } from '@ngrx/store';
import { Product } from '../models/product.model';
import { orderProduct } from './app.actions';

const initialState:Product[] = [];

export const productsReducer = createReducer(
  initialState,
  on(orderProduct, (previousState, { product }) => {
    const newState = [...previousState, product]
    return newState;
  })
);
