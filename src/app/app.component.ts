import { Component } from '@angular/core';
import { ModalService } from './_services/modal.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'modal';
  constructor(private modalService: ModalService) {}
  openAuthModal() {
    this.modalService.toggleModal('auth');
  }
  openRegisterModal() {
    this.modalService.toggleModal('register');
  }
}
