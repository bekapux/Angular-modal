import { Component, OnInit } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-host-domains',
  templateUrl: './host-domains.component.html',
  styleUrls: ['./host-domains.component.scss']
})
export class HostDomainsComponent implements OnInit {

  modalId="host-domains"

  constructor(private modal: ModalService) { }
  
  ngOnDestroy(): void {
    this.modal.unregister(this.modalId)
  }

  ngOnInit(): void {
    this.modal.register(this.modalId)
  }

}
