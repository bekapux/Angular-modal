import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { GenericTableComponent } from './generic-table/generic-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ModalComponent, GenericTableComponent],
  imports: [CommonModule, FormsModule],
  exports: [ModalComponent, GenericTableComponent],
})
export class SharedModule {}
