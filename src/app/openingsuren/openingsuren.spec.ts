import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Openingsuren } from './openingsuren';

describe('Openingsuren', () => {
  let component: Openingsuren;
  let fixture: ComponentFixture<Openingsuren>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Openingsuren],
    }).compileComponents();

    fixture = TestBed.createComponent(Openingsuren);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
