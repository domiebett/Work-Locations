export interface Location {
  name: string;
  shortName: string;
  type: LocationType;
  locations?: Location[];
}

export enum LocationType {
  Office = 'office',
  City = 'city',
  Country = 'country',
}
