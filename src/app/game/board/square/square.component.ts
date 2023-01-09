import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-square',
  template: `<button class="btn btn-danger">{{ value }}</button>`,
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  @Input() value?: 'X' | 'O';
}
