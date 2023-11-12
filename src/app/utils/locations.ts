import { Location, LocationType } from "../types/location";

export const locations: Location[] = [
  {
    name: 'United States',
    shortName: 'US',
    type: LocationType.Country,
    locations: [
      {
        name: 'New York',
        shortName: 'NY',
        type: LocationType.City,
        locations: [
          {
            name: 'Office 1',
            type: LocationType.Office,
            shortName: 'O1',
          },
          {
            name: 'Office 2',
            type: LocationType.Office,
            shortName: 'O2',
          },
        ],
      },
      {
        name: 'San Francisco',
        shortName: 'SF',
        type: LocationType.City,
        locations: [
          {
            name: 'Office A',
            type: LocationType.Office,
            shortName: 'OA',
          },
          {
            name: 'Office B',
            type: LocationType.Office,
            shortName: 'OB',
          },
        ],
      },
    ],
  },
  {
    name: 'United Kingdom',
    shortName: 'UK',
    type: LocationType.Country,
    locations: [
      {
        name: 'London',
        shortName: 'LDN',
        type: LocationType.City,
        locations: [
          {
            name: 'Office X',
            type: LocationType.Office,
            shortName: 'OX',
          },
          {
            name: 'Office Y',
            type: LocationType.Office,
            shortName: 'OY',
          },
        ],
      },
    ],
  },
];
