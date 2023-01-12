import { Injectable } from '@angular/core';

interface ModalState {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: ModalState[] = [];

  toggleModal(id: string) {
    const modal = this.modals.find((x) => x.id == id);
    if (modal) modal.visible = !modal.visible;
  }

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((x) => x.id !== id);
  }

  isModalOpen(id: string): boolean {
    return !!this.modals.find((x) => x.id === id)?.visible;
  }
}
