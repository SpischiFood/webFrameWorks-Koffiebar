import { Component, input, computed, signal, output } from '@angular/core';
import { Bestellijn } from '../bestellijn';
import { App } from '../app';
import { Drank } from '../dranken';

@Component({
  imports: [],
  selector: 'app-bonnetje',
  styleUrl: './bonnetje.css',
  templateUrl: './bonnetje.html',
})
export class Bonnetje {
  bonnetje = input.required<Bestellijn[]>();
  aantalstuks = computed(() => this.bonnetje().reduce((som, lijn) => som + lijn.aantal, 0));
  subtotaal = computed(() =>
    this.bonnetje().reduce((som, lijn) => som + lijn.aantal * lijn.drank.prijs, 0),
  );
  korting = computed(() => {
    if (this.aantalstuks() >= 5) {
      return this.subtotaal() * 0.1;
    }
    return 0;
  });
  fooiPercentage = signal(0);
  totaal = computed(() => {
    let fooi = (this.subtotaal() * this.fooiPercentage()) / 100;
    return this.subtotaal() - this.korting() + fooi;
  });
  verwijder = output<number>();
}
