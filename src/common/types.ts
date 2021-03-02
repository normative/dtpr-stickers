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
  other?: SensorData[];
}

export interface TaxonomyDetails {
  id?: string;
  additionalDescription: string;
  category: string;
  description: string;
  icon: string;
  priority: number;
  title: string;
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
  accountable: string,
  accountableDescription: string,
  accountableLogo: string,
  datachain?: {
    accountable?: TaxonomyDetails[],
    purpose?: TaxonomyDetails[],
    techType?: TaxonomyDetails[],
    dataType?: TaxonomyDetails[],
    dataProcess?: TaxonomyDetails[],
    access?: TaxonomyDetails[],
    storage?: TaxonomyDetails[],
  },
  description: string,
  email: string,
  FAQ?: FAQ[],
  headline: string,
  id: string,
  name: string,
  phone: string,
  placeId: string,
  systems?: Systems,
}

export interface SensorSnapshot {
  accountable: string,
  accountableDescription: string,
  accountableLogo: string,
  datachain?: TaxonomyDetails[],
  description: string,
  email: string,
  FAQ?: FAQ[],
  headline: string,
  id: string,
  name: string,
  phone: string,
  placeId: string,
  systems?: Systems,
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
