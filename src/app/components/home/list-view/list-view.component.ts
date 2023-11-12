import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';
import { LocationNode } from 'src/app/utils/location-node';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  locations!: LocationNode[];

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locations = this.locationsService.getLocations();
  }
}
