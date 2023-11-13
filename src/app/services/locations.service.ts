import { Injectable } from '@angular/core';
import { locations as locationsStorage } from '../data/locations';
import { Location } from '../types/location';
import { v4 as uuidv4 } from 'uuid';
import { LocationType } from '../types/location';

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
    const convertNode = (
      node: Location,
      parent?: LocationNode
    ): LocationNode => {
      const locationNode = new LocationNode(
        node.name,
        node.type,
        node.shortName,
        parent
      );
      locationNode.locations = node.locations
        ? node.locations.map((childNode: Location) =>
            convertNode(childNode, locationNode)
          )
        : [];
      return locationNode;
    };

    return locationsStorage.map((rootNode) => convertNode(rootNode));
  }
}

export class LocationNode {
  readonly id: string;
  readonly name: string;
  readonly type: LocationType;
  readonly shortName: string;
  readonly parent: LocationNode | null;
  locations: LocationNode[] = [];

  constructor(
    name: string,
    type: LocationType,
    shortName: string = '',
    parent: LocationNode | null = null
  ) {
    this.name = name;
    this.type = type;
    this.shortName = shortName;
    this.parent = parent;
    this.id = uuidv4();
  }
}
