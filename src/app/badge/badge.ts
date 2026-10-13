import { Component, input } from '@angular/core';

@Component({
  selector: 'app-badge',
  template: '<span class="badge" [class]="kleur()">{{ label() }}</span>',
  styleUrl: './badge.css',
})
export class Badge {
  label = input.required<string>();
  kleur = input<'groen' | 'grijs' | 'rood'>('grijs');
}
