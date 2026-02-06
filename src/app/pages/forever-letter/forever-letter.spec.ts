import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForeverLetter } from './forever-letter';

describe('ForeverLetter', () => {
  let component: ForeverLetter;
  let fixture: ComponentFixture<ForeverLetter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ForeverLetter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForeverLetter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
