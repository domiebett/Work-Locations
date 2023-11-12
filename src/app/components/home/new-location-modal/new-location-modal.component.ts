import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  form!: FormGroup;

  constructor(
    private locationsService: LocationsService,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.locations = this.locationsService.getLocations();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      shortName: [''],
      parentLocation: [''],
    });
  }

  onSubmit(): void {
    console.log('form value', this.form.value);
  }

  onClose(): void {
    this.matDialog.closeAll();
  }

  xmark = faXmark;
  user = faUser;
  lines = faGripLines;
}
