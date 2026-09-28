import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Bestelknop } from './bestelknop';

describe('Bestelknop', () => {
  let component: Bestelknop;
  let fixture: ComponentFixture<Bestelknop>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Bestelknop],
    }).compileComponents();

    fixture = TestBed.createComponent(Bestelknop);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
