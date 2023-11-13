import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridCardComponent } from './grid-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationStatsComponent } from 'src/app/components/common/location-stats/location-stats.component';
import { LocationType } from 'src/app/types/location';
import { LocationNode } from 'src/app/services/locations.service';

describe('GridCardComponent', () => {
  let component: GridCardComponent;
  let fixture: ComponentFixture<GridCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GridCardComponent, LocationStatsComponent],
      imports: [FontAwesomeModule]
    });
    fixture = TestBed.createComponent(GridCardComponent);
    component = fixture.componentInstance;
    component.location = new LocationNode('Country', LocationType.Country, 'C');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
