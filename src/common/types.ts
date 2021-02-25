import { LngLat } from 'mapbox-gl';

export interface ReducerStateType {
  isFetching: Boolean,
  didInvalidate: Boolean,
  error?: { [name: string]: any },
}

export interface PlaceData {
  id: string,
  name: string,
  lngLat: LngLat,
  address: string, // mapbox place_name
  sensors: { [sensorId: string]: boolean }
  admins: { [uid: string]: boolean },
}

export interface SensorDataWithId extends SensorData {
  id: string;
}

export interface SensorDetailsWithTaxonomyPropValue {
  taxonomyPropValue: string;
  name: string;
  description: string;
  id: string;
}

export interface TaxonomyPropValuesGroups {
  [taxonomyPropValuesName: string]: SensorDetailsWithTaxonomyPropValue[];
}

export interface SensorsGroupByTaxonomyPropValues {
  taxonomyProp?: TaxonomyPropValuesGroups;
  taxonomyPropValues?: string[];
  Others?: SensorData[];
}

export interface TaxonomyDetails {
  category: string;
  id?: string;
  title: string;
  headline?: string;
  description: string;
  icon: string;
}
export interface SenorTaxonomyPropValuesDetails {
  taxonomyProp: string;
  label: string;
  options: TaxonomyDetails[];
}

export interface System {
  title: string;
  description: string;
}

export interface Systems {
  [id: string]: System;
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
  systems?: Systems,
  FAQ?: FAQ[],
}

export interface Sensors {
  [id: string]: SensorData;
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
