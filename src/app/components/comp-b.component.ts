import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-b',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <p>comp-b works!</p>
    </div>
  `,
  styles: [
    "div { background-color: yellow; padding: 5px 10px; margin: 10px 0px; }"
  ]
})
export class CompBComponent {

}
