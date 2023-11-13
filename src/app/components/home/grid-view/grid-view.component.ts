import { Component, OnInit } from '@angular/core';
import {
  LocationNode,
  LocationsService,
} from 'src/app/services/locations.service';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  locations!: LocationNode[];
  selectedLocation: null | LocationNode = null;

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locations = this.locationsService.getLocations();
  }

  getActiveLocations(): LocationNode[] {
    return this.selectedLocation
      ? this.selectedLocation.locations
      : this.locations;
  }

  setSelectedLocation(location: LocationNode | null): void {
    const hasLocations = location?.locations && location.locations.length > 0
    if (hasLocations || location === null) {
      this.selectedLocation = location;
    }
  }
}
