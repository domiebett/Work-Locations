import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
  faGripLines,
  faUser,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import {
  LocationNode,
  LocationsService,
} from 'src/app/services/locations.service';
import { SelectOptionService } from 'src/app/services/select-option.service';
import { LocationType } from 'src/app/types/location';

@Component({
  selector: 'app-new-location-modal',
  templateUrl: './new-location-modal.component.html',
  styleUrls: ['./new-location-modal.component.scss'],
})
export class NewLocationModalComponent implements OnInit {
  locations!: any[];
  form!: FormGroup;
  parentLocation!: LocationNode;

  xmark = faXmark;
  user = faUser;
  lines = faGripLines;

  constructor(
    private locationsService: LocationsService,
    private matDialog: MatDialog,
    private formBuilder: FormBuilder,
    private selectOption: SelectOptionService
  ) {}

  ngOnInit(): void {
    this.locations = this.locationsService.getLocations();
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      shortName: [''],
      parentLocation: [''],
    });

    this.selectOption.selectedOption$.subscribe(
      (selectedLocation: LocationNode) => {
        this.parentLocation = selectedLocation;
      }
    );
  }

  onSubmit(): void {
    if (this.form.invalid) {
      return;
    }

    const { name, shortName } = this.form.value;
    let type: LocationType = this.getLocationType(this.parentLocation);

    const newLocation = new LocationNode(
      name,
      type,
      shortName,
      this.parentLocation
    );
    this.locationsService.addLocation(newLocation, this.parentLocation);

    this.matDialog.closeAll();
  }

  getLocationType(parentLocation: LocationNode): LocationType {
    let type: LocationType;

    if (this.parentLocation) {
      type =
        this.parentLocation.type === LocationType.Country
          ? LocationType.City
          : LocationType.Office;
    } else {
      type = LocationType.Country;
    }

    return type;
  }

  markControlsTouched(): void {
    Object.values(this.form.controls).forEach(
      (control) => control.markAsTouched
    );
  }

  onClose(): void {
    this.matDialog.closeAll();
  }
}
