import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bonnetje } from './bonnetje';

describe('Bonnetje', () => {
  let component: Bonnetje;
  let fixture: ComponentFixture<Bonnetje>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bonnetje],
    }).compileComponents();

    fixture = TestBed.createComponent(Bonnetje);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
