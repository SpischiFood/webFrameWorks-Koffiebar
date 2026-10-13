import { Component, signal } from '@angular/core';
import { Drank, DRANKEN } from '../dranken';
import { DrankTegel } from '../drank-tegel/drank-tegel';

@Component({
  imports: [DrankTegel],
  selector: 'app-drankkaart',
  styleUrl: './drankkaart.css',
  templateUrl: './drankkaart.html',
})
export class Drankkaart {
  dranken = signal<Drank[]>(DRANKEN);
}
