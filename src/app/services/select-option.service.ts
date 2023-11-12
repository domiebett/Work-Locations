import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SelectOptionService {
  private selectOptionSubject = new BehaviorSubject<any>(null);
  selectedOption$ = this.selectOptionSubject.asObservable();

  updateSelectedOption(location: any) {
    this.selectOptionSubject.next(location);
  }
}
