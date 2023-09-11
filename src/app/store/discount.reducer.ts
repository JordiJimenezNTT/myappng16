import { createReducer, on } from "@ngrx/store";
import { setDiscount } from "./app.actions";

const initialState = 0;

export const discountReducer = createReducer(
  initialState,
  on(setDiscount, (previousState, { discount }) => discount)
);

