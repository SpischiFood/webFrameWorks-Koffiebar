// src/app/dranken.ts - de kaart van de koffiebar (startbestand labo 3)
export type Categorie = 'koffie' | 'thee' | 'fris' | 'gebak';

export interface Drank {
  id: number;
  naam: string;
  prijs: number; // in euro
  categorie: Categorie;
  vegan: boolean;
  nieuw: boolean;
  beschikbaar: boolean;
}

export const DRANKEN: Drank[] = [
  {
    id: 1,
    naam: 'Espresso',
    prijs: 2.5,
    categorie: 'koffie',
    vegan: true,
    nieuw: false,
    beschikbaar: false,
  },
  {
    id: 2,
    naam: 'Cappuccino',
    prijs: 3.5,
    categorie: 'koffie',
    vegan: false,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 3,
    naam: 'Latte macchiato',
    prijs: 3.8,
    categorie: 'koffie',
    vegan: false,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 4,
    naam: 'Flat white',
    prijs: 3.9,
    categorie: 'koffie',
    vegan: false,
    nieuw: true,
    beschikbaar: true,
  },
  {
    id: 5,
    naam: 'Haverlatte',
    prijs: 4.2,
    categorie: 'koffie',
    vegan: true,
    nieuw: true,
    beschikbaar: true,
  },
  {
    id: 6,
    naam: 'Groene thee',
    prijs: 2.8,
    categorie: 'thee',
    vegan: true,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 7,
    naam: 'Verse muntthee',
    prijs: 3.2,
    categorie: 'thee',
    vegan: true,
    nieuw: false,
    beschikbaar: false,
  },
  {
    id: 8,
    naam: 'Chai latte',
    prijs: 3.9,
    categorie: 'thee',
    vegan: false,
    nieuw: true,
    beschikbaar: true,
  },
  {
    id: 9,
    naam: 'Spa bruis',
    prijs: 2.2,
    categorie: 'fris',
    vegan: true,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 10,
    naam: 'Verse appelsiensap',
    prijs: 3.9,
    categorie: 'fris',
    vegan: true,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 11,
    naam: 'Huisgemaakte ijsthee',
    prijs: 3.4,
    categorie: 'fris',
    vegan: true,
    nieuw: true,
    beschikbaar: true,
  },
  {
    id: 12,
    naam: 'Wortelcake',
    prijs: 3.6,
    categorie: 'gebak',
    vegan: false,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 13,
    naam: 'Bananenbrood',
    prijs: 3.2,
    categorie: 'gebak',
    vegan: true,
    nieuw: false,
    beschikbaar: true,
  },
  {
    id: 14,
    naam: 'Brownie',
    prijs: 3.0,
    categorie: 'gebak',
    vegan: false,
    nieuw: false,
    beschikbaar: false,
  },
  {
    id: 15,
    naam: 'Speculaastaart',
    prijs: 3.8,
    categorie: 'gebak',
    vegan: false,
    nieuw: true,
    beschikbaar: true,
  },
];
