import { Component, model, signal } from '@angular/core';
import { DRANKEN } from '../dranken';

@Component({
  imports: [],
  selector: 'app-filterbalk',
  styleUrl: './filterbalk.css',
  templateUrl: './filterbalk.html',
})
export class Filterbalk {
  categorieen = [...new Set(DRANKEN.map((drank) => drank.categorie))];
  keuze = model.required<string>();
}
