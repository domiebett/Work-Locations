import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LocationAccordionComponent } from './location-accordion.component';
import { LocationType } from 'src/app/types/location';
import { LocationDetailsComponent } from './location-details/location-details.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationNode } from 'src/app/services/locations.service';

describe('LocationAccordionComponent', () => {
  let component: LocationAccordionComponent;
  let fixture: ComponentFixture<LocationAccordionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LocationAccordionComponent, LocationDetailsComponent],
      imports: [FontAwesomeModule]
    });

    fixture = TestBed.createComponent(LocationAccordionComponent);
    component = fixture.componentInstance;
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should have input properties', () => {
    const locationNode: LocationNode = new LocationNode(
      'Country',
      LocationType.Country,
      'C'
    );
    component.location = locationNode;
    component.isTopLevel = true;

    fixture.detectChanges();

    expect(component.location).toBeDefined();
    expect(component.isTopLevel).toBeDefined();
  });

  it('should have default values for properties', () => {
    expect(component.isTopLevel).toBe(false);
    expect(component.expanded).toBe(false);
  });

  it('should emit dragstart event', () => {
    const dragEvent = {} as DragEvent;

    spyOn(component.dragstart, 'emit');

    component.dragstart.emit(dragEvent);

    expect(component.dragstart.emit).toHaveBeenCalledWith(dragEvent);
  });

  it('should emit dragover event', () => {
    const dragEvent = {} as DragEvent;

    spyOn(component.dragover, 'emit');

    component.dragover.emit(dragEvent);

    expect(component.dragover.emit).toHaveBeenCalledWith(dragEvent);
  });

  it('should toggle expanded state when hasLocations is true', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    locationNode.locations.push(new LocationNode('City', LocationType.City, 'Cty'));
    component.location = locationNode;

    component.toggleActiveState({ stopPropagation: () => {} } as Event);

    expect(component.expanded).toBe(true);
  });

  it('should not toggle expanded state when hasLocations is false', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    component.location = locationNode;

    component.toggleActiveState({ stopPropagation: () => {} } as Event);

    expect(component.expanded).toBe(false);
  });

  it('should return true for isExpanded when hasLocations is true and expanded is true', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    locationNode.locations.push(new LocationNode('City', LocationType.City, 'Cty'))
    component.location = locationNode;
    component.expanded = true;

    const result = component.isExpanded();

    expect(result).toBe(true);
  });

  it('should return false for isExpanded when hasLocations is false', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    component.location = locationNode;

    const result = component.isExpanded();

    expect(result).toBe(false);
  });

  it('should return false for isExpanded when hasLocations is true but expanded is false', () => {
    const locationNode: LocationNode = new LocationNode('Country', LocationType.Country, 'C');
    locationNode.locations.push(new LocationNode('City', LocationType.City, 'Cty'))
    component.location = locationNode;

    const result = component.isExpanded();

    expect(result).toBe(false);
  });
});
