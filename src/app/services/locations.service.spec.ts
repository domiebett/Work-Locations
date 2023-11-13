import { TestBed } from '@angular/core/testing';
import { LocationNode, LocationsService } from './locations.service';
import { LocationType } from '../types/location';

describe('LocationsService', () => {
  let service: LocationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LocationsService],
    });

    service = TestBed.inject(LocationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getLocations', () => {
    it('should return an array of locations', () => {
      const locations = service.getLocations();
      expect(locations).toEqual(jasmine.any(Array));
    });
  });

  describe('addLocation', () => {
    it('should add a new location to the parent if provided', () => {
      const parent: LocationNode = new LocationNode(
        'Parent',
        LocationType.Country,
        'P'
      );
      const newLocation: LocationNode = new LocationNode(
        'Child',
        LocationType.City,
        'C'
      );

      service.addLocation(newLocation, parent);

      expect(parent.locations).toContain(newLocation);
    });

    it('should add a new location to the root if no parent is provided', () => {
      const newLocation: LocationNode = new LocationNode(
        'RootChild',
        LocationType.City,
        'RC'
      );

      service.addLocation(newLocation, null);

      expect(service.getLocations()).toContain(newLocation);
    });
  });

  describe('convertLocationsToTree', () => {
    it('should convert flat locations array to a tree structure', () => {
      const tree = service.convertLocationsToTree();

      // Customize this assertion based on your expected tree structure
      expect(tree).toEqual(jasmine.any(Array));
      expect(tree[0]).toEqual(jasmine.any(LocationNode));
      expect(tree[0].locations[0]).toEqual(jasmine.any(LocationNode));
    });
  });
});
