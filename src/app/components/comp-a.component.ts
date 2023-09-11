import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompBComponent } from './comp-b.component';
import { CompCComponent } from './comp-c/comp-c.component';

@Component({
  selector: 'app-comp-a',
  standalone: true,
  imports: [CommonModule, CompBComponent, CompCComponent],
  template: `
    <div>
      <p>comp-a works!</p>
      <app-comp-b></app-comp-b>
      <app-comp-c></app-comp-c>
    </div>
  `,
  styles: [
    "div { background-color: lightblue; padding: 10px; }"
  ]
})
export class CompAComponent {

}
