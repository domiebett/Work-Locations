import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { LocationNode } from 'src/app/services/locations.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss'],
})
export class BreadcrumbsComponent implements OnChanges {
  @Input() selectedLocation!: LocationNode | null;

  @Output() crumbClick = new EventEmitter<LocationNode | null>();
  
  locationCrumbs!: LocationNode[];

  rightChevron = faChevronRight;

  ngOnChanges(changes: SimpleChanges): void {
    let currentLocation = changes['selectedLocation'].currentValue;
    const locationCrumbs = [];
    while (currentLocation) {
      locationCrumbs.push(currentLocation);
      currentLocation = currentLocation.parent;
    }
    this.locationCrumbs = locationCrumbs.reverse();
  }

  onCrumbClick(location: LocationNode | null): void {
    this.crumbClick.emit(location);
  }
}
