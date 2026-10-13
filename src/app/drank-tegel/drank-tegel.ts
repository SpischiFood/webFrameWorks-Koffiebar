import { Component, input, signal } from '@angular/core';
import { Drank, DRANKEN } from '../dranken';
import { Badge } from '../badge/badge';

@Component({
  imports: [Badge],
  selector: 'app-drank-tegel',
  styleUrl: './drank-tegel.css',
  templateUrl: './drank-tegel.html',
})
export class DrankTegel {
  drank = input.required<Drank>();
}
