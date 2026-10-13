import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DrankTegel } from './drank-tegel';

describe('DrankTegel', () => {
  let component: DrankTegel;
  let fixture: ComponentFixture<DrankTegel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DrankTegel],
    }).compileComponents();

    fixture = TestBed.createComponent(DrankTegel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
