import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationType } from 'src/app/types/location';
import { LocationDetailsComponent } from './location-details.component';
import { LocationNode } from 'src/app/services/locations.service';
import { LocationStatsComponent } from 'src/app/components/common/location-stats/location-stats.component';

describe('LocationDetailsComponent', () => {
  let component: LocationDetailsComponent;
  let fixture: ComponentFixture<LocationDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationDetailsComponent, LocationStatsComponent],
      imports: [FontAwesomeModule],
    });

    fixture = TestBed.createComponent(LocationDetailsComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have input properties', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    component.location = locationNode;
    component.expanded = true;

    fixture.detectChanges();

    expect(component.location).toBeDefined();
    expect(component.expanded).toBeDefined();
  });

  it('should have icons initialized', () => {
    expect(component.chevronUp).toBeDefined();
    expect(component.chevronDown).toBeDefined();
    expect(component.city).toBeDefined();
  });

  it('should return true for hasLocations when locations are present', () => {
    const locationNode = new LocationNode('Country', LocationType.Country, 'C');
    locationNode.locations.push(new LocationNode('City', LocationType.City, 'Cty'))
    component.location = locationNode;

    const result = component.hasLocations();

    expect(result).toBe(true);
  });

  it('should return false for hasLocations when locations are not present', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    component.location = locationNode;

    const result = component.hasLocations();

    expect(result).toBe(false);
  });
});