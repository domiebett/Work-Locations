import { Component, OnInit } from '@angular/core';
import { LocationNode, LocationsService } from 'src/app/services/locations.service';

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
