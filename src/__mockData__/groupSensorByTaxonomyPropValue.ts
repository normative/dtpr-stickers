import {
  Sensors, SensorData, Systems,
} from 'common/types';

export const placeSensors: Sensors = {
  1: {
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
  } as SensorData,
  2: {
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
  } as SensorData,
  3: {
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
  } as SensorData,
  4: {
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
  } as SensorData,
  5: {
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
  } as SensorData,
  6: {
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
  } as SensorData,
  7: {
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
  } as SensorData,
  8: {
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
    } as Systems,
    techType: [
      'Hands Free',
    ],
  } as SensorData,
  9: {
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
  } as SensorData,
  10: {
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
  } as SensorData,
};

export const sensorsGroupedByTaxonomyPropValues = {
  Boolean: [{
    id: '10', sensorDescription: 'This is a description', sensorName: 'WildMics', taxonomyProp: 'dataType', value: 'Boolean',
  }],
  'Pixel-based Image': [{
    id: '3', sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', sensorName: 'Computer Vision Camera', taxonomyProp: 'dataType', value: 'Pixel-based Image',
  }, {
    id: '4', sensorDescription: 'This is a description', sensorName: 'Nest Cam', taxonomyProp: 'dataType', value: 'Pixel-based Image',
  }, {
    id: '9', sensorDescription: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', sensorName: 'Nest Camera', taxonomyProp: 'dataType', value: 'Pixel-based Image',
  }],
  Spatial: [{
    id: '5', sensorDescription: 'More description', sensorName: 'Numina Sensor', taxonomyProp: 'dataType', value: 'Spatial',
  }],
  Tabular: [{
    id: '2', sensorDescription: 'Page Description', sensorName: 'Sensor Name', taxonomyProp: 'dataType', value: 'Tabular',
  }, {
    id: '8', sensorDescription: 'Page Description', sensorName: 'Emergency Sensor', taxonomyProp: 'dataType', value: 'Tabular',
  }],
  'Values / Time': [{
    id: '3', sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', sensorName: 'Computer Vision Camera', taxonomyProp: 'dataType', value: 'Values / Time',
  }],
  'purpose:Energy Efficiency': [{
    id: '1', sensorDescription: '', sensorName: 'New Sensor', taxonomyProp: 'purpose', value: 'Energy Efficiency',
  }],
  'purpose:Fire & Emergency': [{
    id: '8', sensorDescription: 'Page Description', sensorName: 'Emergency Sensor', taxonomyProp: 'purpose', value: 'Fire & Emergency',
  }],
  'purpose:Mobility': [{
    id: '1', sensorDescription: '', sensorName: 'New Sensor', taxonomyProp: 'purpose', value: 'Mobility',
  }, {
    id: '3', sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', sensorName: 'Computer Vision Camera', taxonomyProp: 'purpose', value: 'Mobility',
  }],
  'purpose:Planning & Decision-making': [{
    id: '5', sensorDescription: 'More description', sensorName: 'Numina Sensor', taxonomyProp: 'purpose', value: 'Planning & Decision-making',
  }],
  'purpose:Safety & Security': [{
    id: '1', sensorDescription: '', sensorName: 'New Sensor', taxonomyProp: 'purpose', value: 'Safety & Security',
  }, {
    id: '4', sensorDescription: 'This is a description', sensorName: 'Nest Cam', taxonomyProp: 'purpose', value: 'Safety & Security',
  }, {
    id: '9', sensorDescription: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', sensorName: 'Nest Camera', taxonomyProp: 'purpose', value: 'Safety & Security',
  }],
  'purpose:Switch': [{
    id: '10', sensorDescription: 'This is a description', sensorName: 'WildMics', taxonomyProp: 'purpose', value: 'Switch',
  }],
  'purpose:Wayfinding & Services': [{
    id: '2', sensorDescription: 'Page Description', sensorName: 'Sensor Name', taxonomyProp: 'purpose', value: 'Wayfinding & Services',
  }],
  'systems:HVAC System': [{
    id: '8', sensorDescription: 'Page Description', sensorName: 'Emergency Sensor', taxonomyProp: 'systems', value: 'HVAC System',
  }],
  'systems:Observatory': [{
    id: '8', sensorDescription: 'Page Description', sensorName: 'Emergency Sensor', taxonomyProp: 'systems', value: 'Observatory',
  }],
  'techType:De-identified Image': [{
    id: '5', sensorDescription: 'More description', sensorName: 'Numina Sensor', taxonomyProp: 'techType', value: 'De-identified Image',
  }],
  'techType:De-identified Video': [{
    id: '3', sensorDescription: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', sensorName: 'Computer Vision Camera', taxonomyProp: 'techType', value: 'De-identified Video',
  }],
  'techType:Hands Free': [{
    id: '8', sensorDescription: 'Page Description', sensorName: 'Emergency Sensor', taxonomyProp: 'techType', value: 'Hands Free',
  }],
  'techType:Microphone': [{
    id: '1', sensorDescription: '', sensorName: 'New Sensor', taxonomyProp: 'techType', value: 'Microphone',
  }, {
    id: '10', sensorDescription: 'This is a description', sensorName: 'WildMics', taxonomyProp: 'techType', value: 'Microphone',
  }],
  'techType:Still camera - infrared': [{
    id: '1', sensorDescription: '', sensorName: 'New Sensor', taxonomyProp: 'techType', value: 'Still camera - infrared',
  }],
  'techType:Video camera': [{
    id: '4', sensorDescription: 'This is a description', sensorName: 'Nest Cam', taxonomyProp: 'techType', value: 'Video camera',
  }, {
    id: '9', sensorDescription: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', sensorName: 'Nest Camera', taxonomyProp: 'techType', value: 'Video camera',
  }],
  'techType:Video camera - infrared': [{
    id: '2', sensorDescription: 'Page Description', sensorName: 'Sensor Name', taxonomyProp: 'techType', value: 'Video camera - infrared',
  }],
};

export const sensorsGroupedByTaxonomyProp = {
  Others: [{
    accountableDescription: '', description: '', email: '', headline: '', id: '1', name: 'New Sensor', phone: '', placeId: 'Ur-FM0fJw', purpose: ['Energy Efficiency', 'Mobility', 'Safety & Security'], sensorImageRef: 'sdadsa', techType: ['Microphone', 'Still camera - infrared'],
  }],
  dataType: [{
    access: ['Available based on role'],
    accountable: 'Normative ',
    accountableDescription: 'Org Description',
    chat: '',
    dataProcess: ['Encrypted at Rest'],
    dataType: ['Tabular'],
    description: 'Page Description',
    email: '',
    headline: 'Page Headline',
    id: '2',
    logoRef: '',
    name: 'Sensor Name',
    onsiteStaff: false,
    phone: '',
    placeId: 'srCy3zlxgNHZZgRT_MpRJ',
    purpose: ['Wayfinding & Services'],
    sensorImageRef: '',
    storage: ['Stored on Accountable Party Server'],
    techType: ['Video camera - infrared'],
  }, {
    access: ['Available to the accountable organization', 'Not available to vendor', 'Not available to me'], accountable: 'City of Atlantis', accountableDescription: '', chat: '', dataProcess: ['De-identified', 'AI System'], dataType: ['Pixel-based Image', 'Values / Time'], description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', email: '', headline: 'De-identified computer vision helps pedestrians cross safely', id: '3', logoRef: 'images/Lb2U9ECia/logo.png', name: 'Computer Vision Camera', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Mobility'], sensorImageRef: '', storage: ['Retained 3 months', 'Stored on 3rd Party Cloud'], techType: ['De-identified Video'],
  }, {
    access: ['Available to the accountable organization'], accountable: 'Nest', accountableDescription: 'Creepy Google offspring', chat: '', dataProcess: ['Raw data'], dataType: ['Pixel-based Image'], description: 'This is a description', email: 'kei@normative.com', headline: 'Nest Cam', id: '4', logoRef: 'images/Uee7P8bTI/logo.ico', name: 'Nest Cam', onsiteStaff: false, phone: '4166197927', placeId: 'rZTxvhs2K', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely'], techType: ['Video camera'],
  }, {
    access: ['Available to vendor', 'Available to the accountable organization'], accountable: 'City of Boston', accountableDescription: 'Municipal Government ', chat: '', dataProcess: ['De-identified'], dataType: ['Spatial'], description: 'More description', email: '', headline: 'Sensor that senses', id: '5', logoRef: '', name: 'Numina Sensor', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Planning & Decision-making'], sensorImageRef: '', storage: ['No data retained'], techType: ['De-identified Image'],
  }, {
    accountable: 'ORG NAME', accountableDescription: 'rhfgd', chat: '', dataType: ['Pixel-based Image'], description: 'descroption', email: '', headline: 'Headline!', id: '6', logoRef: 'images/iwNZCxakF/logo.gif', name: '', onsiteStaff: false, phone: '', placeId: 'mTl44Ia1U', purpose: ['Waste Management'], sensorImageRef: 'images/iwNZCxakF/sensorImage.gif', techType: ['Soil Moisture Sensor'],
  }, {
    access: ['Available to me', 'Not available to vendor'], accountable: 'Normative', accountableDescription: 'We do things', chat: '', dataProcess: ['Reviewed Internally'], dataType: ['Pixel-based Image'], description: '', email: '', headline: 'HEADLINE', id: '7', logoRef: 'images/lggYZyUxEV2u9EGHtZ83F/logo.ico', name: '', onsiteStaff: false, phone: '', placeId: 'fQ4YpXPhHralFUQvfDwIq', purpose: [null, 'Commerce', 'Locate Lost Item'], sensorImageRef: '', storage: ['Retained 24 hours'], techType: ['Contactless Payments', 'LiDAR', 'Water Quality', 'Identifiable RFID'],
  }, {
    FAQ: [{ question: 'Where can I see the impact of this sensor?', response: 'Our project website is the go-to resource for things related to ProjectXY.' }, { question: 'How long do you expect this sensor to be here?', response: 'We estimate the data collectiono phase of ProjectXY to last roughly 6 months.' }], access: ['Not available to me'], accountable: 'Normative', accountableDescription: 'Normative Inc.', chat: "I don't know what this is for", dataProcess: ['Code signing'], dataType: ['Tabular'], description: 'Page Description', email: 'mateus@normative.com', headline: 'Page Headline', id: '8', logoRef: '', name: 'Emergency Sensor', onsiteStaff: false, phone: '5549991501212', placeId: '9UP3KDvEKqC-LvjYGibM6', purpose: ['Fire & Emergency'], sensorImageRef: '', storage: ['Retained for single use'], systems: { 345678: { description: 'Heating, ventilation, and air conditioning is the technology of indoor and vehicular environmental comfort. Its goal is to provide thermal comfort and acceptable indoor air quality.', title: 'HVAC System' }, 345679: { description: 'Observatory', title: 'Observatory' } }, techType: ['Hands Free'],
  }, {
    access: ['Available to me'], accountable: 'Nest', accountableDescription: 'Google', chat: '', dataProcess: ['Immutable Query Ledger'], dataType: ['Pixel-based Image'], description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', email: 'lauracamilaospina@gmail.com', headline: 'Nest Camera', id: '9', logoRef: '', name: 'Nest Camera', onsiteStaff: false, phone: '9055065252', placeId: 'ZS7OKOdP8vUUSSZUO03kO', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely', 'No data retained'], techType: ['Video camera'],
  }, {
    access: ['Available to vendor'], accountable: 'Normative', accountableDescription: 'They do things which can be fun (sometimes)', chat: '', dataProcess: ['Reviewed Internally'], dataType: ['Boolean'], description: 'This is a description', email: 'kei@normative.com', headline: 'This is a headline', id: '10', logoRef: 'images/v_GVxCeY0/logo.ico', name: 'WildMics', onsiteStaff: false, phone: '1234567890', placeId: 'Ur-FM0fJw', purpose: ['Switch'], sensorImageRef: '', storage: ['Retained 3 months'], techType: ['Microphone'],
  }],
};

export const groupedSensorsByTaxonomyPropValues = {
  Others: [{
    accountableDescription: '', description: '', email: '', headline: '', id: '1', name: 'New Sensor', phone: '', placeId: 'Ur-FM0fJw', purpose: ['Energy Efficiency', 'Mobility', 'Safety & Security'], sensorImageRef: 'sdadsa', techType: ['Microphone', 'Still camera - infrared'],
  }],
  taxonomyProp: {
    Boolean: [{
      id: '10', description: 'This is a description', name: 'WildMics', taxonomyPropValue: 'Boolean',
    }],
    'Pixel-based Image': [{
      id: '3', description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', name: 'Computer Vision Camera', taxonomyPropValue: 'Pixel-based Image',
    }, {
      id: '4', description: 'This is a description', name: 'Nest Cam', taxonomyPropValue: 'Pixel-based Image',
    }, {
      id: '9', description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', name: 'Nest Camera', taxonomyPropValue: 'Pixel-based Image',
    }],
    Spatial: [{
      id: '5', description: 'More description', name: 'Numina Sensor', taxonomyPropValue: 'Spatial',
    }],
    Tabular: [{
      id: '8', description: 'Page Description', name: 'Emergency Sensor', taxonomyPropValue: 'Tabular',
    }, {
      id: '2', description: 'Page Description', name: 'Sensor Name', taxonomyPropValue: 'Tabular',
    }],
    'Values / Time': [{
      id: '3', description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', name: 'Computer Vision Camera', taxonomyPropValue: 'Values / Time',
    }],
  },
  taxonomyPropValues: ['Boolean', 'Pixel-based Image', 'Spatial', 'Tabular', 'Values / Time'],
};

export const groupedSensorsBySystemsTaxonomyProp = {
  Others: [{
    accountableDescription: '', description: '', email: '', headline: '', id: '1', name: 'New Sensor', phone: '', placeId: 'Ur-FM0fJw', purpose: ['Energy Efficiency', 'Mobility', 'Safety & Security'], sensorImageRef: 'sdadsa', techType: ['Microphone', 'Still camera - infrared'],
  }, {
    access: ['Available based on role'], accountable: 'Normative ', accountableDescription: 'Org Description', chat: '', dataProcess: ['Encrypted at Rest'], dataType: ['Tabular'], description: 'Page Description', email: '', headline: 'Page Headline', id: '2', logoRef: '', name: 'Sensor Name', onsiteStaff: false, phone: '', placeId: 'srCy3zlxgNHZZgRT_MpRJ', purpose: ['Wayfinding & Services'], sensorImageRef: '', storage: ['Stored on Accountable Party Server'], techType: ['Video camera - infrared'],
  }, {
    access: ['Available to the accountable organization', 'Not available to vendor', 'Not available to me'], accountable: 'City of Atlantis', accountableDescription: '', chat: '', dataProcess: ['De-identified', 'AI System'], dataType: ['Pixel-based Image', 'Values / Time'], description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', email: '', headline: 'De-identified computer vision helps pedestrians cross safely', id: '3', logoRef: 'images/Lb2U9ECia/logo.png', name: 'Computer Vision Camera', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Mobility'], sensorImageRef: '', storage: ['Retained 3 months', 'Stored on 3rd Party Cloud'], techType: ['De-identified Video'],
  }, {
    access: ['Available to the accountable organization'], accountable: 'Nest', accountableDescription: 'Creepy Google offspring', chat: '', dataProcess: ['Raw data'], dataType: ['Pixel-based Image'], description: 'This is a description', email: 'kei@normative.com', headline: 'Nest Cam', id: '4', logoRef: 'images/Uee7P8bTI/logo.ico', name: 'Nest Cam', onsiteStaff: false, phone: '4166197927', placeId: 'rZTxvhs2K', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely'], techType: ['Video camera'],
  }, {
    access: ['Available to vendor', 'Available to the accountable organization'], accountable: 'City of Boston', accountableDescription: 'Municipal Government ', chat: '', dataProcess: ['De-identified'], dataType: ['Spatial'], description: 'More description', email: '', headline: 'Sensor that senses', id: '5', logoRef: '', name: 'Numina Sensor', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Planning & Decision-making'], sensorImageRef: '', storage: ['No data retained'], techType: ['De-identified Image'],
  }, {
    accountable: 'ORG NAME', accountableDescription: 'rhfgd', chat: '', dataType: ['Pixel-based Image'], description: 'descroption', email: '', headline: 'Headline!', id: '6', logoRef: 'images/iwNZCxakF/logo.gif', name: '', onsiteStaff: false, phone: '', placeId: 'mTl44Ia1U', purpose: ['Waste Management'], sensorImageRef: 'images/iwNZCxakF/sensorImage.gif', techType: ['Soil Moisture Sensor'],
  }, {
    access: ['Available to me', 'Not available to vendor'], accountable: 'Normative', accountableDescription: 'We do things', chat: '', dataProcess: ['Reviewed Internally'], dataType: ['Pixel-based Image'], description: '', email: '', headline: 'HEADLINE', id: '7', logoRef: 'images/lggYZyUxEV2u9EGHtZ83F/logo.ico', name: '', onsiteStaff: false, phone: '', placeId: 'fQ4YpXPhHralFUQvfDwIq', purpose: [null, 'Commerce', 'Locate Lost Item'], sensorImageRef: '', storage: ['Retained 24 hours'], techType: ['Contactless Payments', 'LiDAR', 'Water Quality', 'Identifiable RFID'],
  }, {
    access: ['Available to me'], accountable: 'Nest', accountableDescription: 'Google', chat: '', dataProcess: ['Immutable Query Ledger'], dataType: ['Pixel-based Image'], description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', email: 'lauracamilaospina@gmail.com', headline: 'Nest Camera', id: '9', logoRef: '', name: 'Nest Camera', onsiteStaff: false, phone: '9055065252', placeId: 'ZS7OKOdP8vUUSSZUO03kO', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely', 'No data retained'], techType: ['Video camera'],
  }, {
    access: ['Available to vendor'], accountable: 'Normative', accountableDescription: 'They do things which can be fun (sometimes)', chat: '', dataProcess: ['Reviewed Internally'], dataType: ['Boolean'], description: 'This is a description', email: 'kei@normative.com', headline: 'This is a headline', id: '10', logoRef: 'images/v_GVxCeY0/logo.ico', name: 'WildMics', onsiteStaff: false, phone: '1234567890', placeId: 'Ur-FM0fJw', purpose: ['Switch'], sensorImageRef: '', storage: ['Retained 3 months'], techType: ['Microphone'],
  }],
  systems: [{
    FAQ: [{ question: 'Where can I see the impact of this sensor?', response: 'Our project website is the go-to resource for things related to ProjectXY.' }, { question: 'How long do you expect this sensor to be here?', response: 'We estimate the data collectiono phase of ProjectXY to last roughly 6 months.' }], access: ['Not available to me'], accountable: 'Normative', accountableDescription: 'Normative Inc.', chat: "I don't know what this is for", dataProcess: ['Code signing'], dataType: ['Tabular'], description: 'Page Description', email: 'mateus@normative.com', headline: 'Page Headline', id: '8', logoRef: '', name: 'Emergency Sensor', onsiteStaff: false, phone: '5549991501212', placeId: '9UP3KDvEKqC-LvjYGibM6', purpose: ['Fire & Emergency'], sensorImageRef: '', storage: ['Retained for single use'], systems: { 345678: { description: 'Heating, ventilation, and air conditioning is the technology of indoor and vehicular environmental comfort. Its goal is to provide thermal comfort and acceptable indoor air quality.', title: 'HVAC System' }, 345679: { description: 'Observatory', title: 'Observatory' } }, techType: ['Hands Free'],
  }],
};

export const dataTypePropValuesWithSensorDetails = [[{
  description: 'Page Description', id: '2', name: 'Sensor Name', taxonomyPropValue: 'Tabular',
}], [{
  description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', id: '3', name: 'Computer Vision Camera', taxonomyPropValue: 'Pixel-based Image',
}, {
  description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', id: '3', name: 'Computer Vision Camera', taxonomyPropValue: 'Values / Time',
}], [{
  description: 'This is a description', id: '4', name: 'Nest Cam', taxonomyPropValue: 'Pixel-based Image',
}], [{
  description: 'More description', id: '5', name: 'Numina Sensor', taxonomyPropValue: 'Spatial',
}], [], [], [{
  description: 'Page Description', id: '8', name: 'Emergency Sensor', taxonomyPropValue: 'Tabular',
}], [{
  description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', id: '9', name: 'Nest Camera', taxonomyPropValue: 'Pixel-based Image',
}], [{
  description: 'This is a description', id: '10', name: 'WildMics', taxonomyPropValue: 'Boolean',
}]];

export const sensorsGroupedBySystemsPropValues = {
  Others: [{
    access: ['Available to the accountable organization', 'Not available to vendor', 'Not available to me'], accountable: 'City of Atlantis', accountableDescription: '', chat: '', dataProcess: ['De-identified', 'AI System'], dataType: ['Pixel-based Image', 'Values / Time'], description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', email: '', headline: 'De-identified computer vision helps pedestrians cross safely', id: '3', logoRef: 'images/Lb2U9ECia/logo.png', name: 'Computer Vision Camera', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Mobility'], sensorImageRef: '', storage: ['Retained 3 months', 'Stored on 3rd Party Cloud'], techType: ['De-identified Video'],
  }, {
    access: ['Available to the accountable organization'], accountable: 'Nest', accountableDescription: 'Creepy Google offspring', chat: '', dataProcess: ['Raw data'], dataType: ['Pixel-based Image'], description: 'This is a description', email: 'kei@normative.com', headline: 'Nest Cam', id: '4', logoRef: 'images/Uee7P8bTI/logo.ico', name: 'Nest Cam', onsiteStaff: false, phone: '4166197927', placeId: 'rZTxvhs2K', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely'], techType: ['Video camera'],
  }, {
    access: ['Available to me'], accountable: 'Nest', accountableDescription: 'Google', chat: '', dataProcess: ['Immutable Query Ledger'], dataType: ['Pixel-based Image'], description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', email: 'lauracamilaospina@gmail.com', headline: 'Nest Camera', id: '9', logoRef: '', name: 'Nest Camera', onsiteStaff: false, phone: '9055065252', placeId: 'ZS7OKOdP8vUUSSZUO03kO', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely', 'No data retained'], techType: ['Video camera'],
  }, {
    accountableDescription: '', description: '', email: '', headline: '', id: '1', name: 'New Sensor', phone: '', placeId: 'Ur-FM0fJw', purpose: ['Energy Efficiency', 'Mobility', 'Safety & Security'], sensorImageRef: 'sdadsa', techType: ['Microphone', 'Still camera - infrared'],
  }, {
    access: ['Available to vendor', 'Available to the accountable organization'], accountable: 'City of Boston', accountableDescription: 'Municipal Government ', chat: '', dataProcess: ['De-identified'], dataType: ['Spatial'], description: 'More description', email: '', headline: 'Sensor that senses', id: '5', logoRef: '', name: 'Numina Sensor', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Planning & Decision-making'], sensorImageRef: '', storage: ['No data retained'], techType: ['De-identified Image'],
  }, {
    access: ['Available based on role'], accountable: 'Normative ', accountableDescription: 'Org Description', chat: '', dataProcess: ['Encrypted at Rest'], dataType: ['Tabular'], description: 'Page Description', email: '', headline: 'Page Headline', id: '2', logoRef: '', name: 'Sensor Name', onsiteStaff: false, phone: '', placeId: 'srCy3zlxgNHZZgRT_MpRJ', purpose: ['Wayfinding & Services'], sensorImageRef: '', storage: ['Stored on Accountable Party Server'], techType: ['Video camera - infrared'],
  }, {
    access: ['Available to vendor'], accountable: 'Normative', accountableDescription: 'They do things which can be fun (sometimes)', chat: '', dataProcess: ['Reviewed Internally'], dataType: ['Boolean'], description: 'This is a description', email: 'kei@normative.com', headline: 'This is a headline', id: '10', logoRef: 'images/v_GVxCeY0/logo.ico', name: 'WildMics', onsiteStaff: false, phone: '1234567890', placeId: 'Ur-FM0fJw', purpose: ['Switch'], sensorImageRef: '', storage: ['Retained 3 months'], techType: ['Microphone'],
  }],
  taxonomyProp: {
    'HVAC System': [{
      description: 'Page Description', id: '8', name: 'Emergency Sensor', taxonomyPropValue: 'HVAC System',
    }],
    Observatory: [{
      description: 'Page Description', id: '8', name: 'Emergency Sensor', taxonomyPropValue: 'Observatory',
    }],
  },
  taxonomyPropValues: ['HVAC System', 'Observatory'],
};

export const sensorsGroupedByNotFoundTaxonomyProp = {
  Others: [{
    access: ['Available to the accountable organization', 'Not available to vendor', 'Not available to me'], accountable: 'City of Atlantis', accountableDescription: '', chat: '', dataProcess: ['De-identified', 'AI System'], dataType: ['Pixel-based Image', 'Values / Time'], description: 'At a city intersection, a camera with onboard computer vision monitors pedestrian crossing. This technology detects when people are waiting to cross the street, and automatically changes the traffic light. It ensures that people have enough time to cross. This benefits pedestrians with shorter wait times and safer crossings. No raw images of faces are sent to the cloud. Only information about location and traffic type (i.e., pedestrian, car or cyclist) are sent for further processing.', email: '', headline: 'De-identified computer vision helps pedestrians cross safely', id: '3', logoRef: 'images/Lb2U9ECia/logo.png', name: 'Computer Vision Camera', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Mobility'], sensorImageRef: '', storage: ['Retained 3 months', 'Stored on 3rd Party Cloud'], techType: ['De-identified Video'],
  }, {
    FAQ: [{ question: 'Where can I see the impact of this sensor?', response: 'Our project website is the go-to resource for things related to ProjectXY.' }, { question: 'How long do you expect this sensor to be here?', response: 'We estimate the data collectiono phase of ProjectXY to last roughly 6 months.' }], access: ['Not available to me'], accountable: 'Normative', accountableDescription: 'Normative Inc.', chat: "I don't know what this is for", dataProcess: ['Code signing'], dataType: ['Tabular'], description: 'Page Description', email: 'mateus@normative.com', headline: 'Page Headline', id: '8', logoRef: '', name: 'Emergency Sensor', onsiteStaff: false, phone: '5549991501212', placeId: '9UP3KDvEKqC-LvjYGibM6', purpose: ['Fire & Emergency'], sensorImageRef: '', storage: ['Retained for single use'], systems: { 345678: { description: 'Heating, ventilation, and air conditioning is the technology of indoor and vehicular environmental comfort. Its goal is to provide thermal comfort and acceptable indoor air quality.', title: 'HVAC System' }, 345679: { description: 'Observatory', title: 'Observatory' } }, techType: ['Hands Free'],
  }, {
    access: ['Available to the accountable organization'], accountable: 'Nest', accountableDescription: 'Creepy Google offspring', chat: '', dataProcess: ['Raw data'], dataType: ['Pixel-based Image'], description: 'This is a description', email: 'kei@normative.com', headline: 'Nest Cam', id: '4', logoRef: 'images/Uee7P8bTI/logo.ico', name: 'Nest Cam', onsiteStaff: false, phone: '4166197927', placeId: 'rZTxvhs2K', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely'], techType: ['Video camera'],
  }, {
    access: ['Available to me'], accountable: 'Nest', accountableDescription: 'Google', chat: '', dataProcess: ['Immutable Query Ledger'], dataType: ['Pixel-based Image'], description: 'Purpose: to understand pedestrian dynamics and patterns of behavior for all travel modes between the Jackson Square T stop and the Southwest Corridor. Data Collected: de-identified images collected through Numina sensors are used to count pedestrians, bikes, and vehicles. Find out more by clicking the icons below.', email: 'lauracamilaospina@gmail.com', headline: 'Nest Camera', id: '9', logoRef: '', name: 'Nest Camera', onsiteStaff: false, phone: '9055065252', placeId: 'ZS7OKOdP8vUUSSZUO03kO', purpose: ['Safety & Security'], sensorImageRef: '', storage: ['Retained indefinitely', 'No data retained'], techType: ['Video camera'],
  }, {
    accountableDescription: '', description: '', email: '', headline: '', id: '1', name: 'New Sensor', phone: '', placeId: 'Ur-FM0fJw', purpose: ['Energy Efficiency', 'Mobility', 'Safety & Security'], sensorImageRef: 'sdadsa', techType: ['Microphone', 'Still camera - infrared'],
  }, {
    access: ['Available to vendor', 'Available to the accountable organization'], accountable: 'City of Boston', accountableDescription: 'Municipal Government ', chat: '', dataProcess: ['De-identified'], dataType: ['Spatial'], description: 'More description', email: '', headline: 'Sensor that senses', id: '5', logoRef: '', name: 'Numina Sensor', onsiteStaff: false, phone: '', placeId: 'lK7pio6ro', purpose: ['Planning & Decision-making'], sensorImageRef: '', storage: ['No data retained'], techType: ['De-identified Image'],
  }, {
    access: ['Available based on role'], accountable: 'Normative ', accountableDescription: 'Org Description', chat: '', dataProcess: ['Encrypted at Rest'], dataType: ['Tabular'], description: 'Page Description', email: '', headline: 'Page Headline', id: '2', logoRef: '', name: 'Sensor Name', onsiteStaff: false, phone: '', placeId: 'srCy3zlxgNHZZgRT_MpRJ', purpose: ['Wayfinding & Services'], sensorImageRef: '', storage: ['Stored on Accountable Party Server'], techType: ['Video camera - infrared'],
  }, {
    access: ['Available to vendor'], accountable: 'Normative', accountableDescription: 'They do things which can be fun (sometimes)', chat: '', dataProcess: ['Reviewed Internally'], dataType: ['Boolean'], description: 'This is a description', email: 'kei@normative.com', headline: 'This is a headline', id: '10', logoRef: 'images/v_GVxCeY0/logo.ico', name: 'WildMics', onsiteStaff: false, phone: '1234567890', placeId: 'Ur-FM0fJw', purpose: ['Switch'], sensorImageRef: '', storage: ['Retained 3 months'], techType: ['Microphone'],
  }],
  taxonomyProp: {},
  taxonomyPropValues: [],
};
