import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-upload-document-labels',
  templateUrl: './upload-document-labels.component.html',
  styleUrls: ['./upload-document-labels.component.scss']
})
export class UploadDocumentLabelsComponent implements OnInit {
  modalId="upload-document-labels"

  constructor(private modal: ModalService) { }
  
  ngOnDestroy(): void {
    this.modal.unregister(this.modalId)
  }

  ngOnInit(): void {
    this.modal.register(this.modalId)
  }
}
