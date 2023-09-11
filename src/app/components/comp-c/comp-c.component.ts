import { Component, Signal, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-comp-c',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './comp-c.component.html',
  styles: [
    "div { background-color: white; padding: 5px 10px; }"
  ]
})
export class CompCComponent {

  // [set()] Señal string actualizada directamente mediante set() desde el html
  productName = signal<string>('');
  // simpleText = 'asd'; // ¡Esto no puede hacerse!

  // [update()] Señal number actualizada mediante update() función que tiene en cuenta su valor actual
  price = signal<number>(0);

  // [computed()] Señal number actualizada automáticamente mediante computed
  priceWithTaxes = computed( () => this.price() * 1.21 );

  // [effect()] Log actualizado automáticamente usando effect
  priceWithTaxesLog = signal<number[]>([]);

  // [mutate()] Señal objeto actualizada automáticamente mediante computed
  // product: Signal<Product> = computed( () => ({ name: this.productName(), price: this.price(), priceWithTaxes: this.priceWithTaxes(), takeAway: false }) );
  product = signal<Product>({ name: this.productName(), price: this.price(), priceWithTaxes: this.priceWithTaxes() });


  constructor() {
    effect( () => this.priceWithTaxesLog().push(this.priceWithTaxes()) );
  }

  onInputTextChange(event:Event):void {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    this.productName.set(value);
  }

  add(value:number):void {
    this.price.update( currentValue => currentValue + value );
    // Se podría hacer lo mismo con this.price.set(this.price() + value), pero no sería correcto,
    // dado que update está diseñado para operaciones que dependen de un valor previo de las señales involucradas
  }

  orderProduct() {
    this.product.mutate( (value) => {
      value.name = this.productName();
      value.price = this.price();
      value.priceWithTaxes = this.priceWithTaxes();
    });
  }

}
