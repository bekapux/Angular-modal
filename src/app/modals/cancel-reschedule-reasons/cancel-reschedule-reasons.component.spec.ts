import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancelRescheduleReasonsComponent } from './cancel-reschedule-reasons.component';

describe('CancelRescheduleReasonsComponent', () => {
  let component: CancelRescheduleReasonsComponent;
  let fixture: ComponentFixture<CancelRescheduleReasonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CancelRescheduleReasonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CancelRescheduleReasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
