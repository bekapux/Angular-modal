import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GenericIdWithNameModel } from 'src/app/_models/genericIdWithName.model';

@Component({
  selector: 'app-generic-table',
  templateUrl: './generic-table.component.html',
  styleUrls: ['./generic-table.component.scss'],
})
export class GenericTableComponent {
  @Input() data: GenericIdWithNameModel[];
  @Input() showId: boolean = true;
  @Input() isLoading: boolean = false;

  @Output() addNewEvent = new EventEmitter<string>();
  @Output() onEditedEvent = new EventEmitter<GenericIdWithNameModel>();
  @Output() onDeleteEvent = new EventEmitter<string>();
  newItem: string='';
  editMode: string[] = [];
  showOneEntryError = false;
  showFieldIsRequiredError = false;

  onAddNew() {
    if (this.newItem.trim().length > 0) {
      this.showOneEntryError = false;
      this.addNewEvent.emit(this.newItem.trim());
      this.showFieldIsRequiredError = false;
      this.newItem = '';
      return;
    }
    this.showFieldIsRequiredError = true;
  }

  onDelete(id: string) {
    if (this.data.length === 1) {
      this.showOneEntryError = true;
      return;
    }
    this.onDeleteEvent.emit(id);
  }

  onDone(id: string) {
    const value = (document.getElementById(id) as HTMLInputElement).value;
    this.disableEditForItem(id);
    this.onEditedEvent.emit({ id: id, name: value });
  }

  onEditClick(id: string) {
    this.editMode.push(id);
  }

  private disableEditForItem(id: string) {
    this.editMode = this.editMode.filter((x) => x != id);
  }
}
