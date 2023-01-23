import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GenericIdWithNameModel } from 'src/app/_models/genericIdWithName.model';
import { ModalService } from 'src/app/_services/modal.service';
import { RequestSourcesService } from 'src/app/_services/request-sources.service';

@Component({
  selector: 'app-request-sources',
  templateUrl: './request-sources.component.html',
  styleUrls: ['./request-sources.component.scss']
})
export class RequestSourcesComponent implements OnInit, OnDestroy {
  modalId="request-sources";
  requestSources: GenericIdWithNameModel[];
  isLoading = false;

  constructor(private modal: ModalService, private requestSourcesService: RequestSourcesService) { }
  
  ngOnDestroy(): void {
    this.modal.unregister(this.modalId)
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.requestSourcesService.getRequestSources().subscribe(res=>{
      this.requestSources = res;
      this.isLoading = false;
    });

    this.modal.register(this.modalId);
  }

  closeModal(){
    this.modal.toggleModal(this.modalId);
  }

  onDelete(id: string){
    this.requestSourcesService.delete(id);
  }

  onSourceAdded(data: any){
    this.requestSourcesService.addRequestSource(data);
  }
}
