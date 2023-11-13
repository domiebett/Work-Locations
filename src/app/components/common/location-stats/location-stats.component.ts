import { Component } from '@angular/core';
import {
  faHouseChimneyUser,
  faPeopleGroup,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-location-stats',
  templateUrl: './location-stats.component.html',
  styleUrls: ['./location-stats.component.scss'],
})
export class LocationStatsComponent {
  people = faPeopleGroup;
  person = faUser;
  office = faHouseChimneyUser;
}
