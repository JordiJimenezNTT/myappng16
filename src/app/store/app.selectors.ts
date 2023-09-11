import { createSelector } from "@ngrx/store";
import { AppState } from "./app.reducer";

export const selectDiscount = createSelector(
  (state:AppState) => state.discount,
  (discount) => discount
);

export const selectProducts = createSelector(
  (state:AppState) => state.products,
  (products) => products
);
