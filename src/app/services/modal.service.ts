import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NewLocationModalComponent } from '../components/home/new-location-modal/new-location-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  constructor(private matDialog: MatDialog) { }

  openNewLocationModal() {
    this.matDialog.open(NewLocationModalComponent, {panelClass: 'visible-overflow'});
  }
}
