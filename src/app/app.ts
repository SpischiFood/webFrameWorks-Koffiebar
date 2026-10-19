import { Component, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
//import { RouterOutlet } from '@angular/router';
import { Hoofding } from './hoofding/hoofding';
import { Drankkaart } from './drankkaart/drankkaart';
//import { Bestelknop } from './bestelknop/bestelknop';
import { Bonnetje } from './bonnetje/bonnetje';
import { Voettekst } from './voettekst/voettekst';
import { Bestellijn } from './bestellijn';
import { Drank, DRANKEN } from './dranken';
import { Badge } from './badge/badge';
import { Filterbalk } from './filterbalk/filterbalk';

@Component({
  imports: [Hoofding, Drankkaart, Voettekst, Bonnetje, Filterbalk, FormsModule],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('koffiebar');
  DRANKEN = DRANKEN;
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
  verwijder(id: number) {
    this.bestelling.update((lijst) => {
      return lijst.filter((lijn) => lijn.drank.id !== id);
    });
  }
  keuze = signal('alle');

  zoekterm = signal('');

  zichtbaar = computed(() => {
    let lijst;
    if (this.keuze() === 'alle') {
      lijst = DRANKEN;
    } else {
      lijst = DRANKEN.filter((drank) => drank.categorie === this.keuze());
    }
    return lijst.filter((drank) =>
      drank.naam.toLowerCase().includes(this.zoekterm().toLocaleLowerCase()),
    );
  });
}
