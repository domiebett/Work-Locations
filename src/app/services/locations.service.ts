import { Injectable } from '@angular/core';
import { LocationNode } from '../utils/location-node';
import { locations as locationsStorage } from '../utils/locations';

@Injectable({
  providedIn: 'root',
})
export class LocationsService {
  private locations: LocationNode[] = this.convertLocationsToTree();

  getLocations() {
    return this.locations;
  }

  addLocation(newLocation: LocationNode, parent: LocationNode | null): void {
    if (parent) {
      parent.locations.push(newLocation);
    } else {
      this.locations.push(newLocation);
    }
  }

  convertLocationsToTree(): LocationNode[] {
    const convertNode = (node: any): LocationNode => {
      const locationNode = new LocationNode(node.name, node.type, node.shortName);
      locationNode.locations = node.locations
        ? node.locations.map(convertNode)
        : [];
      return locationNode;
    };

    return locationsStorage.map(convertNode);
  }
}
