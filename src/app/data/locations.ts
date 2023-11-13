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
      {
        name: 'Manchester',
        shortName: 'MCR',
        type: LocationType.City,
        locations: [
          {
            name: 'Office M',
            type: LocationType.Office,
            shortName: 'OM',
          },
          {
            name: 'Office N',
            type: LocationType.Office,
            shortName: 'ON',
          },
        ],
      },
    ],
  },
  {
    name: 'Canada',
    shortName: 'CA',
    type: LocationType.Country,
    locations: [
      {
        name: 'Toronto',
        shortName: 'TOR',
        type: LocationType.City,
        locations: [
          {
            name: 'Office C',
            type: LocationType.Office,
            shortName: 'OC',
          },
          {
            name: 'Office D',
            type: LocationType.Office,
            shortName: 'OD',
          },
        ],
      },
    ],
  },
  {
    name: 'Germany',
    shortName: 'DE',
    type: LocationType.Country,
    locations: [
      {
        name: 'Berlin',
        shortName: 'BER',
        type: LocationType.City,
        locations: [
          {
            name: 'Office E',
            type: LocationType.Office,
            shortName: 'OE',
          },
          {
            name: 'Office F',
            type: LocationType.Office,
            shortName: 'OF',
          },
        ],
      },
    ],
  },
  {
    name: 'Australia',
    shortName: 'AU',
    type: LocationType.Country,
    locations: [
      {
        name: 'Sydney',
        shortName: 'SYD',
        type: LocationType.City,
        locations: [
          {
            name: 'Office G',
            type: LocationType.Office,
            shortName: 'OG',
          },
          {
            name: 'Office H',
            type: LocationType.Office,
            shortName: 'OH',
          },
        ],
      },
    ],
  },
];
