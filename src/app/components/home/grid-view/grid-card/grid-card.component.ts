import { Component, EventEmitter, Input, Output } from '@angular/core';
import { faChevronRight, faCity } from '@fortawesome/free-solid-svg-icons';
import { LocationNode } from 'src/app/services/locations.service';

@Component({
  selector: 'app-grid-card',
  templateUrl: './grid-card.component.html',
  styleUrls: ['./grid-card.component.scss']
})
export class GridCardComponent {
  @Input() location!: LocationNode;
  
  @Output() click = new EventEmitter<LocationNode>();

  city = faCity;
  rightChevron = faChevronRight

  onClick(): void {
    this.click.emit(this.location);
  }

  hasLocations(): boolean {
    return this.location?.locations && this.location.locations.length > 0;
  }
}
