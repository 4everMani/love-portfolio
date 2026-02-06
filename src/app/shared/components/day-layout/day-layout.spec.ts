import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayLayout } from './day-layout';

describe('DayLayout', () => {
  let component: DayLayout;
  let fixture: ComponentFixture<DayLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayLayout]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DayLayout);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
