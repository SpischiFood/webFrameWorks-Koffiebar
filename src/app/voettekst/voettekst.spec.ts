import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Voettekst } from './voettekst';

describe('Voettekst', () => {
  let component: Voettekst;
  let fixture: ComponentFixture<Voettekst>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Voettekst],
    }).compileComponents();

    fixture = TestBed.createComponent(Voettekst);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
