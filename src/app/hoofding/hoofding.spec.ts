import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Hoofding } from './hoofding';

describe('Hoofding', () => {
  let component: Hoofding;
  let fixture: ComponentFixture<Hoofding>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Hoofding],
    }).compileComponents();

    fixture = TestBed.createComponent(Hoofding);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
