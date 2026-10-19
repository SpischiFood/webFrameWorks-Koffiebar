import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Filterbalk } from './filterbalk';

describe('Filterbalk', () => {
  let component: Filterbalk;
  let fixture: ComponentFixture<Filterbalk>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Filterbalk],
    }).compileComponents();

    fixture = TestBed.createComponent(Filterbalk);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
