import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  faGripLines,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-new-location-modal',
  templateUrl: './new-location-modal.component.html',
  styleUrls: ['./new-location-modal.component.scss'],
})
export class NewLocationModalComponent implements OnInit {
  locations!: any[];

  constructor(private locationsService: LocationsService, private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((data) => {
      this.locations = data.locations;
    });
  }

  onClose(): void {
    this.matDialog.closeAll();
  }

  xmark = faXmark;
  user = faUser;
  lines = faGripLines;
}
