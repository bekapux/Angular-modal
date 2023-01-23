import { Component, Input, OnInit, ElementRef, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/_services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId: string = '';
  @Input() size: string = 'xl'
  constructor(public modalService: ModalService, private el: ElementRef) {}

  ngOnInit(): void {
    this.el.nativeElement.remove();
    document.body.appendChild(this.el.nativeElement);
  }

  closeModal() {
    this.modalService.toggleModal(this.modalId);
  }

  ngOnDestroy(){
    document.body.removeChild(this.el.nativeElement);
  }
}
