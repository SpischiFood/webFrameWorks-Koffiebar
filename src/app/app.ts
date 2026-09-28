import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Hoofding } from './hoofding/hoofding';
import { Drankkaart } from './drankkaart/drankkaart';
import { Bestelknop } from './bestelknop/bestelknop';
import { Voettekst } from './voettekst/voettekst';

@Component({
  imports: [RouterOutlet, Hoofding, Drankkaart, Bestelknop, Voettekst],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('koffiebar');
}
