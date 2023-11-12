import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/services/locations.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss'],
})
export class ListViewComponent implements OnInit {
  locations!: any[];

  constructor(private locationsService: LocationsService) {}

  ngOnInit(): void {
    this.locationsService.getLocations().subscribe((data) => {
      this.locations = data.locations;
    });
  }
}
