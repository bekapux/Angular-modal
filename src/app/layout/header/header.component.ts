import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(
    private modalService: ModalService,
    public authService: AuthService
  ) {}
  
  isLoggedIn: boolean = false;

  openAuthModal() {
    this.modalService.toggleModal('auth');
  }
  openRegisterModal() {
    this.modalService.toggleModal('register');
  }

  logOut() {
    this.authService.$user.next(false);
  }
}
