import { LngLat } from 'mapbox-gl';

export interface ReducerStateType {
  isFetching: Boolean,
  didInvalidate: Boolean,
  error?: Error,
}

export interface PlaceData {
  id: string,
  name: string,
  lngLat: LngLat,
  address: string, // mapbox place_name
  sensors: { [sensorId: string]: boolean }
  admins: { [uid: string]: boolean },
}

export interface SensorData {
  id: string,
  placeId: string,
  name: string,
  headline: string,
  description: string
  accountable: string,
  accountableDescription: string,
  purpose: string[],
  techType: string[],
  dataType: string[],
  dataProcess: string[],
  access: string[],
  storage: string[],
  phone: string,
  chat: string,
  email: string,
  onsiteStaff: boolean,
  logoRef: string,
  logoSrc?: string,
  sensorImageRef: string,
  sensorImageSrc?: string,
}

// The table names in airtable
export type TableName =
  'Technology Type' |
  'Purpose' |
  'Data Type' |
  'Data Process' |
  'Access' |
  'Storage' |
  'Accountability'

export interface Option {
  name: string;
  iconShortname: string;
  description: string;
}

export interface AirtableData {
  techType: Option[];
  purpose: Option[];
  dataType: Option[];
  dataProcess: Option[];
  access: Option[];
  storage: Option[];
  accountable: Option[];
}
