import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReasonsForVisitComponent } from './reasons-for-visit.component';

describe('ReasonsForVisitComponent', () => {
  let component: ReasonsForVisitComponent;
  let fixture: ComponentFixture<ReasonsForVisitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReasonsForVisitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReasonsForVisitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
