import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { LocationView } from '../types/view';

@Injectable({
  providedIn: 'root'
})
export class ActiveViewService {
  activeViewChanged = new EventEmitter<LocationView>();
}
