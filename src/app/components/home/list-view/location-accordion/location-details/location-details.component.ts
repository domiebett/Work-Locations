import { Component, Input } from '@angular/core';
import {
  faChevronDown,
  faChevronUp,
  faCity,
} from '@fortawesome/free-solid-svg-icons';
import { LocationNode } from 'src/app/services/locations.service';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss'],
})
export class LocationDetailsComponent {
  @Input() location!: LocationNode;
  @Input() expanded!: boolean;

  // icons
  chevronUp = faChevronUp;
  chevronDown = faChevronDown;
  city = faCity;

  hasLocations(): boolean {
    return !!this.location.locations && this.location.locations.length > 0;
  }
}
