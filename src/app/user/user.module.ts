import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SharedModule } from '../shared/shared.module';
import { RegisterModalComponent } from './register-modal/register-modal.component';

@NgModule({
  declarations: [AuthModalComponent, RegisterModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent, RegisterModalComponent],
})
export class UserModule {}
