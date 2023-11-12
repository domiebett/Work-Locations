import { v4 as uuidv4 } from 'uuid';
import { LocationType } from '../types/location';

export class LocationNode {
  readonly id: string;
  readonly name: string;
  readonly type: LocationType;
  readonly shortName: string;
  locations: LocationNode[] = [];

  constructor(name: string, type: LocationType, shortName: string = '') {
    this.name = name;
    this.type = type;
    this.shortName = shortName;
    this.id = uuidv4()
  }
}
