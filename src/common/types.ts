import { LngLat } from 'mapbox-gl';
import { sensorsGroupNames } from './constants';

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

export interface SensorByTaxonomyProp {
  id: string,
  sensorDescription: string,
  sensorName: string,
  taxonomyProp: sensorsGroupNames,
  value: string,
}

export interface SensorsGroup {
  sensorGroup: string;
  label: string;
  options: Option[];
}

export interface System {
  title: string;
  description: string;
}

export interface FAQ {
  question: string;
  response: string;
}

export interface FeedbackQuestion {
  text: string;
  type: string;
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
  systems?: System[],
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

export interface IconConfig {
  hexSrc: string;
  iconSrc: string;
  fontColor: string;
  iconName: string;
}

export interface SVGProps {
  transform: string,
  fill: string,
}
