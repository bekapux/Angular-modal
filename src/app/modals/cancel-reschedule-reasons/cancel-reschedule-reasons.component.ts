import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-cancel-reschedule-reasons',
  templateUrl: './cancel-reschedule-reasons.component.html',
  styleUrls: ['./cancel-reschedule-reasons.component.scss']
})
export class CancelRescheduleReasonsComponent implements OnInit {
  modalId="cancel-reschedule-reasons"
  constructor(private modal: ModalService) { }
  
  ngOnDestroy(): void {
    this.modal.unregister(this.modalId)
  }

  ngOnInit(): void {
    this.modal.register(this.modalId)
  }

  closeModal(){
    this.modal.toggleModal(this.modalId);
  }
}
