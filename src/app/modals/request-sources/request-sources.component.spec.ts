import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestSourcesComponent } from './request-sources.component';

describe('RequestSourcesComponent', () => {
  let component: RequestSourcesComponent;
  let fixture: ComponentFixture<RequestSourcesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RequestSourcesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RequestSourcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
