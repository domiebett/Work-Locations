import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocationNode } from './locations.service';

@Injectable({
  providedIn: 'root',
})
export class SelectOptionService {
  private selectOptionSubject = new BehaviorSubject<any>(null);
  selectedOption$ = this.selectOptionSubject.asObservable();

  updateSelectedOption(location: LocationNode) {
    this.selectOptionSubject.next(location);
  }

  resetSelection(): void {
    this.selectOptionSubject.next(null);
  }
}
