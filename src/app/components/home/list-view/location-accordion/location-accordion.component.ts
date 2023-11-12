import { Component, Input } from '@angular/core';
import { Location } from 'src/app/types/location';

@Component({
  selector: 'app-location-accordion',
  templateUrl: './location-accordion.component.html',
  styleUrls: ['./location-accordion.component.scss']
})
export class LocationAccordionComponent {
  @Input() location!: Location;

  expanded: boolean = false;

  toggleActiveState(event: Event) {
    event.stopPropagation();
    if (this.hasLocations()) {
      this.expanded = !this.expanded;
    }
  }

  hasLocations(): boolean {
    return this.location.locations && this.location.locations.length > 0;
  }
}
