import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { GenericIdWithNameModel } from '../_models/genericIdWithName.model';
let RequestSources: GenericIdWithNameModel[] = [
  { id: '4f20c156-c187-417d-929d-799859c0c817', name: 'Not Listed' },
  { id: '6767f3e0-9628-471c-b7ec-0ba4a9aa895f', name: 'Covid' },
  { id: '4a23497a-16a8-490e-a1d1-2b3cb4af2732', name: 'Friends/Family' },
  { id: 'c31ed559-9576-432f-94a4-56ff09f0ffdd', name: 'Other (write comment)' },
];
@Injectable({
  providedIn: 'root',
})
export class RequestSourcesService {
  constructor() {}

  getRequestSources() {
    return of(RequestSources);
  }

  addRequestSource(newSource: string) {
    RequestSources.push({ id: this.generateGuid(), name: newSource });
    return of({});
  }

  delete(id: string) {
    let index = RequestSources.findIndex((item) => item.id === id);
    RequestSources.splice(index, 1);
  }

  private generateGuid(): string {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (Math.random() * 16) | 0,
          v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
      }
    );
  }
}
