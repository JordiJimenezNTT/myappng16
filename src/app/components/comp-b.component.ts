import { Component, Signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { Product } from '../models/product.model';
import { selectDiscount, selectProducts } from '../store/app.selectors';
import { setDiscount } from '../store/app.actions';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>comp-b works!</p>
      <button (click)="applyDiscount(10)">10% off</button>
      <button (click)="applyDiscount(20)">20% off</button>
      <p>Discount: {{ discount() }} %</p>
      <p>Products: {{ products() | json }}</p>
    </div>
  `,
  styles: [
    "div { background-color: yellow; padding: 5px 10px; margin: 10px 0px; }"
  ]
})
export class CompBComponent {

  discount: Signal<number> = this.store.selectSignal(selectDiscount);
  products: Signal<Product[]> = this.store.selectSignal(selectProducts);

  constructor(private store: Store<AppState>) {}

  applyDiscount(discount:number): void {
    this.store.dispatch(setDiscount({ discount: discount }));
  }

}
