import { Component, signal, computed } from '@angular/core';
//import { RouterOutlet } from '@angular/router';
import { Hoofding } from './hoofding/hoofding';
import { Drankkaart } from './drankkaart/drankkaart';
//import { Bestelknop } from './bestelknop/bestelknop';
import { Voettekst } from './voettekst/voettekst';
import { Bestellijn } from './bestellijn';
import { Drank } from './dranken';

@Component({
  imports: [Hoofding, Drankkaart, Voettekst],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('koffiebar');
  bestelling = signal<Bestellijn[]>([]);
  bestel(drank: Drank) {
    const lijn = this.bestelling.update((lijst) => {
      if (lijst.some((l) => l.drank.id === drank.id)) {
        return lijst.map((l) => (l.drank.id === drank.id ? { ...l, aantal: l.aantal + 1 } : l));
      } else {
        return [...lijst, { drank: drank, aantal: 1 }];
      }
    });
  }
  totaalAantal = computed(() => {
    return this.bestelling().reduce((som, lijn) => som + lijn.aantal, 0);
  });
}
