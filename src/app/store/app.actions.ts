import { createAction, props } from '@ngrx/store';
import { Product } from '../models/product.model';

export const setDiscount = createAction(
  'Set discount',
  props<{discount: number}>()
);

export const orderProduct = createAction(
  'Order product',
  props<{product: Product}>()
);
