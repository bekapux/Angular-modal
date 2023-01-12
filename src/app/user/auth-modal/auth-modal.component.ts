import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.scss'],
})
export class AuthModalComponent implements OnInit {
  modalId = "auth";
  constructor(private modalService: ModalService, private authService: AuthService) {}

  ngOnInit(): void {
    this.modalService.register(this.modalId);
  }

  closeModal() {
    this.modalService.toggleModal(this.modalId);
  }

  onLogin(){
    console.log("click");
    this.modalService.toggleModal(this.modalId);
    this.authService.$user.next(true)
  }

  ngOnDestroy() {
    this.modalService.unregister(this.modalId);
  }

  onRegisterClick(){
    this.modalService.toggleModal(this.modalId);
    this.modalService.toggleModal("register");
  }
}
