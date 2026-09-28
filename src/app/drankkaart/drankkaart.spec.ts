import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Drankkaart } from './drankkaart';

describe('Drankkaart', () => {
  let component: Drankkaart;
  let fixture: ComponentFixture<Drankkaart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Drankkaart],
    }).compileComponents();

    fixture = TestBed.createComponent(Drankkaart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
