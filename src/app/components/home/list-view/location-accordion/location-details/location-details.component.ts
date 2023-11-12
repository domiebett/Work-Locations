import { Component, Input } from '@angular/core';
import { faChevronDown, faChevronUp, faCity, faHouseChimneyUser, faPeopleGroup, faUser } from '@fortawesome/free-solid-svg-icons';
import { Location } from 'src/app/types/location';

@Component({
  selector: 'app-location-details',
  templateUrl: './location-details.component.html',
  styleUrls: ['./location-details.component.scss']
})
export class LocationDetailsComponent {
  @Input() location!: Location;
  @Input() expanded!: boolean;

  // icons
  chevronUp = faChevronUp;
  chevronDown = faChevronDown;
  city = faCity;
  people = faPeopleGroup;
  person = faUser;
  office = faHouseChimneyUser;

  hasLocations(): boolean {
    return !!this.location.locations && this.location.locations.length > 0;
  }
}
