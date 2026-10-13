import { Component, input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hoofding',
  styleUrl: './hoofding.css',
  templateUrl: './hoofding.html',
})
export class Hoofding {
  aantal = input.required<number>();
}
