import { ActionReducerMap } from "@ngrx/store";

import { Product } from "../models/product.model";

import { discountReducer } from "./discount.reducer";
import { productsReducer } from "./products.reducer";

export interface AppState {
  discount: number
  products: Product[],
}

export const appReducers: ActionReducerMap<AppState> = {
  discount: discountReducer,
  products: productsReducer,
}
