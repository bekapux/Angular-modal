import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-register-modal',
  templateUrl: './register-modal.component.html',
  styleUrls: ['./register-modal.component.scss'],
})
export class RegisterModalComponent implements OnInit {
  modalId = 'register';
  constructor(private modalService: ModalService) {}

  ngOnInit(): void {
    this.modalService.register(this.modalId);
  }

  ngOnDestroy() {
    this.modalService.unregister(this.modalId);
  }

  closeModal() {
    this.modalService.toggleModal(this.modalId);
  }
}
