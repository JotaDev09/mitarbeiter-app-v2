import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidaysRequestComponent } from './holidays-request.component';

describe('HolidaysRequestComponent', () => {
  let component: HolidaysRequestComponent;
  let fixture: ComponentFixture<HolidaysRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HolidaysRequestComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HolidaysRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
