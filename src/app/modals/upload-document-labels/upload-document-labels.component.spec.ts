import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadDocumentLabelsComponent } from './upload-document-labels.component';

describe('UploadDocumentLabelsComponent', () => {
  let component: UploadDocumentLabelsComponent;
  let fixture: ComponentFixture<UploadDocumentLabelsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadDocumentLabelsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UploadDocumentLabelsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
