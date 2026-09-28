import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-bestelknop',
  styleUrl: './bestelknop.css',
  templateUrl: './bestelknop.html',
})
export class Bestelknop {
  aantal = signal(0);

  bestel() {
    this.aantal.update((n) => n + 1);
  }
}
