import { Component, Input, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { LocationNode } from 'src/app/utils/location-node';

@Component({
  selector: 'app-grid-view',
  templateUrl: './grid-view.component.html',
  styleUrls: ['./grid-view.component.scss'],
})
export class GridViewComponent implements OnInit {
  locations!: LocationNode[];

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locations = this.locationsService.getLocations();
  }
}
