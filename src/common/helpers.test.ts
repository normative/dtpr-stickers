import flattenDeep from 'lodash.flattendeep';
import groupBy from 'lodash.groupby';

const placeSensors = [
  {
    accountableDescription: '',
    description: '',
    email: '',
    headline: '',
    name: 'New Sensor',
    phone: '',
    placeId: 'Ur-FM0fJw',
    purpose: [
      'Energy Efficiency',
      'Mobility',
      'Safety & Security',
    ],
    sensorImageRef: 'sdadsa',
    techType: [
      'Microphone',
      'Still camera - infrared',
    ],
  },
  {
    access: [
      'Available based on role',
    ],
    accountable: 'Normative ',
    accountableDescription: 'Org Description',
    chat: '',
    dataProcess: [
      'Encrypted at Rest',
    ],
    dataType: [
      'Tabular',
    ],
    description: 'Page Description',
    email: '',
    headline: 'Page Headline',
    logoRef: '',
    name: 'Sensor Name',
    onsiteStaff: false,
    phone: '',
    placeId: 'srCy3zlxgNHZZgRT_MpRJ',
    purpose: [
      'Wayfinding & Services',
    ],
    sensorImageRef: '',
    storage: [
      'Stored on Accountable Party Server',
    ],
    techType: [
      'Video camera - infrared',
    ],
  },
  {
    access: [
      'Available to the accountable organization',
      'Not available to vendor',
      'Not available to me',
    ],
    accountable: 'City of Atlantis',
    accountableDescription: '',
    chat: '',
    dataProcess: [
      'De-identified',
      'AI System',
    ],
    dataType: [
      'Pixel-based Image',
      'Values / Time',
    ],
    description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.',
    email: '',
    headline: 'De-identified computer vision helps pedestrians cross safely',
    logoRef: 'images/Lb2U9ECia/logo.png',
    name: 'Computer Vision Camera',
    onsiteStaff: false,
    phone: '',
    placeId: 'lK7pio6ro',
    purpose: [
      'Mobility',
    ],
    sensorImageRef: '',
    storage: [
      'Retained 3 months',
      'Stored on 3rd Party Cloud',
    ],
    techType: [
      'De-identified Video',
    ],
  },
  {
    access: [
      'Available to the accountable organization',
    ],
    accountable: 'Nest',
    accountableDescription: 'Creepy Google offspring',
    chat: '',
    dataProcess: [
      'Raw data',
    ],
    dataType: [
      'Pixel-based Image',
    ],
    description: 'This is a description',
    email: 'kei@normative.com',
    headline: 'Nest Cam',
    logoRef: 'images/Uee7P8bTI/logo.ico',
    name: 'Nest Cam',
    onsiteStaff: false,
    phone: '4166197927',
    placeId: 'rZTxvhs2K',
    purpose: [
      'Safety & Security',
    ],
    sensorImageRef: '',
    storage: [
      'Retained indefinitely',
    ],
    techType: [
      'Video camera',
    ],
  },
  {
    access: [
      'Available to vendor',
      'Available to the accountable organization',
    ],
    accountable: 'City of Boston',
    accountableDescription: 'Municipal Government ',
    chat: '',
    dataProcess: [
      'De-identified',
    ],
    dataType: [
      'Spatial',
    ],
    description: 'More description',
    email: '',
    headline: 'Sensor that senses',
    logoRef: '',
    name: 'Numina Sensor',
    onsiteStaff: false,
    phone: '',
    placeId: 'lK7pio6ro',
    purpose: [
      'Planning & Decision-making',
    ],
    sensorImageRef: '',
    storage: [
      'No data retained',
    ],
    techType: [
      'De-identified Image',
    ],
  },
  {
    accountable: 'ORG NAME',
    accountableDescription: 'rhfgd',
    chat: '',
    dataType: [
      'Pixel-based Image',
    ],
    description: 'descroption',
    email: '',
    headline: 'Headline!',
    logoRef: 'images/iwNZCxakF/logo.gif',
    name: '',
    onsiteStaff: false,
    phone: '',
    placeId: 'mTl44Ia1U',
    purpose: [
      'Waste Management',
    ],
    sensorImageRef: 'images/iwNZCxakF/sensorImage.gif',
    techType: [
      'Soil Moisture Sensor',
    ],
  },
  {
    access: [
      'Available to me',
      'Not available to vendor',
    ],
    accountable: 'Normative',
    accountableDescription: 'We do things',
    chat: '',
    dataProcess: [
      'Reviewed Internally',
    ],
    dataType: [
      'Pixel-based Image',
    ],
    description: '',
    email: '',
    headline: 'HEADLINE',
    logoRef: 'images/lggYZyUxEV2u9EGHtZ83F/logo.ico',
    name: '',
    onsiteStaff: false,
    phone: '',
    placeId: 'fQ4YpXPhHralFUQvfDwIq',
    purpose: [
      null,
      'Commerce',
      'Locate Lost Item',
    ],
    sensorImageRef: '',
    storage: [
      'Retained 24 hours',
    ],
    techType: [
      'Contactless Payments',
      'LiDAR',
      'Water Quality',
      'Identifiable RFID',
    ],
  },
  {
    FAQ: [
      {
        question: 'Where can I see the impact of this sensor?',
        response: 'Our project website is the go-to resource for things related to ProjectXY.',
      },
      {
        question: 'How long do you expect this sensor to be here?',
        response: 'We estimate the data collectiono phase of ProjectXY to last roughly 6 months.',
      },
    ],
    access: [
      'Not available to me',
    ],
    accountable: 'Normative',
    accountableDescription: 'Normative Inc.',
    chat: "I don't know what this is for",
    dataProcess: [
      'Code signing',
    ],
    dataType: [
      'Tabular',
    ],
    description: 'Page Description',
    email: 'mateus@normative.com',
    headline: 'Page Headline',
    logoRef: '',
    name: 'Emergency Sensor',
    onsiteStaff: false,
    phone: '5549991501212',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    purpose: [
      'Fire & Emergency',
    ],
    sensorImageRef: '',
    storage: [
      'Retained for single use',
    ],
    systems: {
      345678: {
        description: 'Heating, ventilation, and air conditioning is the technology of indoor and vehicular environmental comfort. Its goal is to provide thermal comfort and acceptable indoor air quality.',
        title: 'HVAC System',
      },
      345679: {
        description: 'Observatory',
        title: 'Observatory',
      },
    },
    techType: [
      'Hands Free',
    ],
  },
  {
    access: [
      'Available to me',
    ],
    accountable: 'Nest',
    accountableDescription: 'Google',
    chat: '',
    dataProcess: [
      'Immutable Query Ledger',
    ],
    dataType: [
      'Pixel-based Image',
    ],
    description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.',
    email: 'lauracamilaospina@gmail.com',
    headline: 'Nest Camera',
    logoRef: '',
    name: 'Nest Camera',
    onsiteStaff: false,
    phone: '9055065252',
    placeId: 'ZS7OKOdP8vUUSSZUO03kO',
    purpose: [
      'Safety & Security',
    ],
    sensorImageRef: '',
    storage: [
      'Retained indefinitely',
      'No data retained',
    ],
    techType: [
      'Video camera',
    ],
  },
  {
    access: [
      'Available to vendor',
    ],
    accountable: 'Normative',
    accountableDescription: 'They do things which can be fun (sometimes)',
    chat: '',
    dataProcess: [
      'Reviewed Internally',
    ],
    dataType: [
      'Boolean',
    ],
    description: 'This is a description',
    email: 'kei@normative.com',
    headline: 'This is a headline',
    logoRef: 'images/v_GVxCeY0/logo.ico',
    name: 'WildMics',
    onsiteStaff: false,
    phone: '1234567890',
    placeId: 'Ur-FM0fJw',
    purpose: [
      'Switch',
    ],
    sensorImageRef: '',
    storage: [
      'Retained 3 months',
    ],
    techType: [
      'Microphone',
    ],
  },
];

const taxonomyToBeFlatten = ['systems', 'techType', 'purpose', 'dataType'];

function groupSensorByTaxonomyPropValue(sensors, taxonomy) {
  const flattenList = flattenSensorTaxonomy(sensors, taxonomy);
  return groupBy(flattenList, ({ taxonomyProp, value }) => {
    return `${taxonomyProp}:${value}`;
  });
}

function flattenSensorTaxonomy(sensors, taxonomy) {
  return flattenDeep(sensors.map((sensor) => (
    mapSensorToMultipleTaxonomyProp(sensor, taxonomy)
  )));
}

function mapSensorToMultipleTaxonomyProp(sensor, taxonomy) {
  return taxonomy.map((taxonomyProp) => {
    return mapSensorToTaxonomyProp(sensor, taxonomyProp);
  })
}

function mapSensorToTaxonomyProp(sensor, taxonomyProp) {
  let taxonomy = sensor[taxonomyProp];
  if (!taxonomy) return [];

  if(taxonomyProp === 'systems') {
    taxonomy = Object.values(sensor.systems).map(({ title }) => title);
  }

  return Object.values(taxonomy).map((taxonomyValue) => ({
    sensorName: sensor.name,
    sensorDescription: sensor.description,
    value: taxonomyValue,
    taxonomyProp,
  }));
}

describe('group sensors by taxonomy', () => {
  test('should map sensor to taxonomy property', () => {
    expect(mapSensorToTaxonomyProp(placeSensors[7], 'techType')).toEqual([{
      "sensorDescription": "Page Description",
      "sensorName": "Emergency Sensor",
      "taxonomyProp": "techType",
      "value": "Hands Free",
    }]);
  });

  test('should map sensor to multiple taxonomy property', () => {
    expect(mapSensorToMultipleTaxonomyProp(placeSensors[7], taxonomyToBeFlatten)).toEqual([
      [
        {
          sensorDescription: 'Page Description',
          sensorName: 'Emergency Sensor',
          taxonomyProp: 'systems',
          value: 'HVAC System',
        },
        {
          sensorDescription: 'Page Description',
          sensorName: 'Emergency Sensor',
          taxonomyProp: 'systems',
          value: 'Observatory',
        },
      ],
      [
        {
          sensorDescription: 'Page Description',
          sensorName: 'Emergency Sensor',
          taxonomyProp: 'techType',
          value: 'Hands Free',
        },
      ],
      [
        {
          sensorDescription: 'Page Description',
          sensorName: 'Emergency Sensor',
          taxonomyProp: 'purpose',
          value: 'Fire & Emergency',
        },
      ],
      [
        {
          sensorDescription: 'Page Description',
          sensorName: 'Emergency Sensor',
          taxonomyProp: 'dataType',
          value: 'Tabular',
        },
      ],
    ]);
  });

  test('should flatten all sensor taxonomy', () => {
    expect(flattenSensorTaxonomy(placeSensors, taxonomyToBeFlatten)).toEqual([
      {
        sensorDescription: '',
        sensorName: 'New Sensor',
        taxonomyProp: 'techType',
        value: 'Microphone',
      },
      {
        sensorDescription: '',
        sensorName: 'New Sensor',
        taxonomyProp: 'techType',
        value: 'Still camera - infrared',
      },
      {
        sensorDescription: '',
        sensorName: 'New Sensor',
        taxonomyProp: 'purpose',
        value: 'Energy Efficiency',
      },
      {
        sensorDescription: '',
        sensorName: 'New Sensor',
        taxonomyProp: 'purpose',
        value: 'Mobility',
      },
      {
        sensorDescription: '',
        sensorName: 'New Sensor',
        taxonomyProp: 'purpose',
        value: 'Safety & Security',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Sensor Name',
        taxonomyProp: 'techType',
        value: 'Video camera - infrared',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Sensor Name',
        taxonomyProp: 'purpose',
        value: 'Wayfinding & Services',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Sensor Name',
        taxonomyProp: 'dataType',
        value: 'Tabular',
      },
      {
        sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.',
        sensorName: 'Computer Vision Camera',
        taxonomyProp: 'techType',
        value: 'De-identified Video',
      },
      {
        sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.',
        sensorName: 'Computer Vision Camera',
        taxonomyProp: 'purpose',
        value: 'Mobility',
      },
      {
        sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.',
        sensorName: 'Computer Vision Camera',
        taxonomyProp: 'dataType',
        value: 'Pixel-based Image',
      },
      {
        sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.',
        sensorName: 'Computer Vision Camera',
        taxonomyProp: 'dataType',
        value: 'Values / Time',
      },
      {
        sensorDescription: 'This is a description',
        sensorName: 'Nest Cam',
        taxonomyProp: 'techType',
        value: 'Video camera',
      },
      {
        sensorDescription: 'This is a description',
        sensorName: 'Nest Cam',
        taxonomyProp: 'purpose',
        value: 'Safety & Security',
      },
      {
        sensorDescription: 'This is a description',
        sensorName: 'Nest Cam',
        taxonomyProp: 'dataType',
        value: 'Pixel-based Image',
      },
      {
        sensorDescription: 'More description',
        sensorName: 'Numina Sensor',
        taxonomyProp: 'techType',
        value: 'De-identified Image',
      },
      {
        sensorDescription: 'More description',
        sensorName: 'Numina Sensor',
        taxonomyProp: 'purpose',
        value: 'Planning & Decision-making',
      },
      {
        sensorDescription: 'More description',
        sensorName: 'Numina Sensor',
        taxonomyProp: 'dataType',
        value: 'Spatial',
      },
      {
        sensorDescription: 'descroption',
        sensorName: '',
        taxonomyProp: 'techType',
        value: 'Soil Moisture Sensor',
      },
      {
        sensorDescription: 'descroption',
        sensorName: '',
        taxonomyProp: 'purpose',
        value: 'Waste Management',
      },
      {
        sensorDescription: 'descroption',
        sensorName: '',
        taxonomyProp: 'dataType',
        value: 'Pixel-based Image',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'techType',
        value: 'Contactless Payments',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'techType',
        value: 'LiDAR',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'techType',
        value: 'Water Quality',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'techType',
        value: 'Identifiable RFID',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'purpose',
        value: null,
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'purpose',
        value: 'Commerce',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'purpose',
        value: 'Locate Lost Item',
      },
      {
        sensorDescription: '',
        sensorName: '',
        taxonomyProp: 'dataType',
        value: 'Pixel-based Image',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'systems',
        value: 'HVAC System',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'systems',
        value: 'Observatory',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'techType',
        value: 'Hands Free',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'purpose',
        value: 'Fire & Emergency',
      },
      {
        sensorDescription: 'Page Description',
        sensorName: 'Emergency Sensor',
        taxonomyProp: 'dataType',
        value: 'Tabular',
      },
      {
        sensorDescription: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.',
        sensorName: 'Nest Camera',
        taxonomyProp: 'techType',
        value: 'Video camera',
      },
      {
        sensorDescription: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.',
        sensorName: 'Nest Camera',
        taxonomyProp: 'purpose',
        value: 'Safety & Security',
      },
      {
        sensorDescription: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.',
        sensorName: 'Nest Camera',
        taxonomyProp: 'dataType',
        value: 'Pixel-based Image',
      },
      {
        sensorDescription: 'This is a description',
        sensorName: 'WildMics',
        taxonomyProp: 'techType',
        value: 'Microphone',
      },
      {
        sensorDescription: 'This is a description',
        sensorName: 'WildMics',
        taxonomyProp: 'purpose',
        value: 'Switch',
      },
      {
        sensorDescription: 'This is a description',
        sensorName: 'WildMics',
        taxonomyProp: 'dataType',
        value: 'Boolean',
    }]);
  });

  test('should group all sensor by taxonomy prop values', () => {
    expect(groupSensorByTaxonomyPropValue(placeSensors, taxonomyToBeFlatten)).toEqual({"dataType:Boolean": [{"sensorDescription": "This is a description", "sensorName": "WildMics", "taxonomyProp": "dataType", "value": "Boolean"}], "dataType:Pixel-based Image": [{"sensorDescription": "At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.", "sensorName": "Computer Vision Camera", "taxonomyProp": "dataType", "value": "Pixel-based Image"}, {"sensorDescription": "This is a description", "sensorName": "Nest Cam", "taxonomyProp": "dataType", "value": "Pixel-based Image"}, {"sensorDescription": "descroption", "sensorName": "", "taxonomyProp": "dataType", "value": "Pixel-based Image"}, {"sensorDescription": "", "sensorName": "", "taxonomyProp": "dataType", "value": "Pixel-based Image"}, {"sensorDescription": "Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.", "sensorName": "Nest Camera", "taxonomyProp": "dataType", "value": "Pixel-based Image"}], "dataType:Spatial": [{"sensorDescription": "More description", "sensorName": "Numina Sensor", "taxonomyProp": "dataType", "value": "Spatial"}], "dataType:Tabular": [{"sensorDescription": "Page Description", "sensorName": "Sensor Name", "taxonomyProp": "dataType", "value": "Tabular"}, {"sensorDescription": "Page Description", "sensorName": "Emergency Sensor", "taxonomyProp": "dataType", "value": "Tabular"}], "dataType:Values / Time": [{"sensorDescription": "At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.", "sensorName": "Computer Vision Camera", "taxonomyProp": "dataType", "value": "Values / Time"}], "purpose:Commerce": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "purpose", "value": "Commerce"}], "purpose:Energy Efficiency": [{"sensorDescription": "", "sensorName": "New Sensor", "taxonomyProp": "purpose", "value": "Energy Efficiency"}], "purpose:Fire & Emergency": [{"sensorDescription": "Page Description", "sensorName": "Emergency Sensor", "taxonomyProp": "purpose", "value": "Fire & Emergency"}], "purpose:Locate Lost Item": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "purpose", "value": "Locate Lost Item"}], "purpose:Mobility": [{"sensorDescription": "", "sensorName": "New Sensor", "taxonomyProp": "purpose", "value": "Mobility"}, {"sensorDescription": "At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.", "sensorName": "Computer Vision Camera", "taxonomyProp": "purpose", "value": "Mobility"}], "purpose:Planning & Decision-making": [{"sensorDescription": "More description", "sensorName": "Numina Sensor", "taxonomyProp": "purpose", "value": "Planning & Decision-making"}], "purpose:Safety & Security": [{"sensorDescription": "", "sensorName": "New Sensor", "taxonomyProp": "purpose", "value": "Safety & Security"}, {"sensorDescription": "This is a description", "sensorName": "Nest Cam", "taxonomyProp": "purpose", "value": "Safety & Security"}, {"sensorDescription": "Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.", "sensorName": "Nest Camera", "taxonomyProp": "purpose", "value": "Safety & Security"}], "purpose:Switch": [{"sensorDescription": "This is a description", "sensorName": "WildMics", "taxonomyProp": "purpose", "value": "Switch"}], "purpose:Waste Management": [{"sensorDescription": "descroption", "sensorName": "", "taxonomyProp": "purpose", "value": "Waste Management"}], "purpose:Wayfinding & Services": [{"sensorDescription": "Page Description", "sensorName": "Sensor Name", "taxonomyProp": "purpose", "value": "Wayfinding & Services"}], "purpose:null": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "purpose", "value": null}], "systems:HVAC System": [{"sensorDescription": "Page Description", "sensorName": "Emergency Sensor", "taxonomyProp": "systems", "value": "HVAC System"}], "systems:Observatory": [{"sensorDescription": "Page Description", "sensorName": "Emergency Sensor", "taxonomyProp": "systems", "value": "Observatory"}], "techType:Contactless Payments": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "techType", "value": "Contactless Payments"}], "techType:De-identified Image": [{"sensorDescription": "More description", "sensorName": "Numina Sensor", "taxonomyProp": "techType", "value": "De-identified Image"}], "techType:De-identified Video": [{"sensorDescription": "At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.", "sensorName": "Computer Vision Camera", "taxonomyProp": "techType", "value": "De-identified Video"}], "techType:Hands Free": [{"sensorDescription": "Page Description", "sensorName": "Emergency Sensor", "taxonomyProp": "techType", "value": "Hands Free"}], "techType:Identifiable RFID": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "techType", "value": "Identifiable RFID"}], "techType:LiDAR": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "techType", "value": "LiDAR"}], "techType:Microphone": [{"sensorDescription": "", "sensorName": "New Sensor", "taxonomyProp": "techType", "value": "Microphone"}, {"sensorDescription": "This is a description", "sensorName": "WildMics", "taxonomyProp": "techType", "value": "Microphone"}], "techType:Soil Moisture Sensor": [{"sensorDescription": "descroption", "sensorName": "", "taxonomyProp": "techType", "value": "Soil Moisture Sensor"}], "techType:Still camera - infrared": [{"sensorDescription": "", "sensorName": "New Sensor", "taxonomyProp": "techType", "value": "Still camera - infrared"}], "techType:Video camera": [{"sensorDescription": "This is a description", "sensorName": "Nest Cam", "taxonomyProp": "techType", "value": "Video camera"}, {"sensorDescription": "Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.", "sensorName": "Nest Camera", "taxonomyProp": "techType", "value": "Video camera"}], "techType:Video camera - infrared": [{"sensorDescription": "Page Description", "sensorName": "Sensor Name", "taxonomyProp": "techType", "value": "Video camera - infrared"}], "techType:Water Quality": [{"sensorDescription": "", "sensorName": "", "taxonomyProp": "techType", "value": "Water Quality"}]});
  });
})
