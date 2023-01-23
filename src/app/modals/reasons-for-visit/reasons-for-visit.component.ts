import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-reasons-for-visit',
  templateUrl: './reasons-for-visit.component.html',
  styleUrls: ['./reasons-for-visit.component.scss']
})
export class ReasonsForVisitComponent implements OnInit {

  modalId="reasons-for-visit"

  constructor(private modal: ModalService) { }
  
  ngOnDestroy(): void {
    this.modal.unregister(this.modalId)
  }

  ngOnInit(): void {
    this.modal.register(this.modalId)
  }

}
