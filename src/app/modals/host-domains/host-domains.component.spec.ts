import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HostDomainsComponent } from './host-domains.component';

describe('HostDomainsComponent', () => {
  let component: HostDomainsComponent;
  let fixture: ComponentFixture<HostDomainsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HostDomainsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HostDomainsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
