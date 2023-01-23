import { Component } from '@angular/core';
import { ModalService } from './_services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'modal';

  isRequestSourcesOpen = false;

  constructor(public modalService: ModalService) {}
  openAuthModal() {
    this.modalService.toggleModal('auth');
  }
  openRegisterModal() {
    this.modalService.toggleModal('register');
  }

  openRequestSourcesModal() {
    this.isRequestSourcesOpen = true;
      this.modalService.register('request-sources');
      this.modalService.toggleModal('request-sources');
    }
    
    openReasonsForVisitModal() {
    this.modalService.register('reasons-for-visit');
    this.modalService.toggleModal('reasons-for-visit');
  }
  
  openCancelRescheduleModal() {
    this.modalService.register('cancel-reschedule-reasons');
    this.modalService.toggleModal('cancel-reschedule-reasons');
  }
  
  openUploadDocumentLabelsModal() {
    this.modalService.register('upload-document-labels');
    this.modalService.toggleModal('upload-document-labels');
  }
  openHostDomainsModal() {
    this.modalService.register('host-domains');
    this.modalService.toggleModal('host-domains');
  }
}
