import { SensorData } from 'common/types';

export const sensorsData: { [name: string]: SensorData} = {
  10: {
    accountable: 'Boston',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [
        {
          additionalDescription: 'Lift does additional things like this and this',
          category: 'accountable',
          description: '...',
          icon: 'accountable/org',
          priority: 0,
          title: 'Lyft',
        },
        {
          additionalDescription: 'This is an additioanl discriordfd.',
          category: 'accountable',
          description: 'Same Description',
          icon: 'accountable/org',
          priority: 1,
          title: 'Boston',
        },
      ],
      purpose: [
        {
          additionalDescription: '',
          category: 'purpose',
          description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).',
          icon: 'purpose/mobility',
          priority: 0,
          title: 'Values / Time',
        },
      ],
      techType: [
        {
          additionalDescription: '...',
          category: 'techType',
          description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here',
          icon: 'tech/wave',
          priority: 0,
          title: 'Wireless Access Point',
        },
      ],
      dataType: [
        {
          additionalDescription: '...',
          category: 'dataType',
          description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] (https://en.wikipedia.org/wiki/Time_series).',
          icon: 'data/values',
          priority: 0,
          title: 'Values / Time',
        },
        {
          additionalDescription: '...',
          category: 'dataType',
          description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)',
          icon: 'data/table',
          priority: 1,
          title: 'Tabular',
        },
      ],
      dataProcess: [
        {
          additionalDescription: '...',
          category: 'dataProcess',
          description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))',
          icon: 'process/encrypted',
          priority: 0,
          title: 'Encrypted',
        },
      ],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    FAQ: [
      {
        question: 'Question',
        response: 'Response',
      },
    ],
    systems: {
      10: {
        title: 'System Title',
        description: 'System Description',
      },
    },
    headline: 'Soofa Sign',
    name: 'Boston Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    id: '10',
  },
  20: {
    accountable: 'New York',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [
        {
          additionalDescription: 'This is an additioanl discriordfd.',
          category: 'accountable',
          description: 'Same Description',
          icon: 'accountable/org',
          priority: 1,
          title: 'New York',
        },
      ],
      purpose: [
        {
          additionalDescription: '',
          category: 'purpose',
          description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).',
          icon: 'purpose/mobility',
          priority: 0,
          title: 'Values / Time',
        },
      ],
      techType: [
        {
          additionalDescription: '...',
          category: 'techType',
          description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here',
          icon: 'tech/wave',
          priority: 0,
          title: 'Wireless Access Point',
        },
      ],
      dataProcess: [
        {
          additionalDescription: '...',
          category: 'dataProcess',
          description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))',
          icon: 'process/encrypted',
          priority: 0,
          title: 'Encrypted',
        },
      ],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    FAQ: [
      {
        question: 'Question',
        response: 'Response',
      },
    ],
    headline: 'Soofa Sign',
    name: 'New YorK Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    id: '20',
  },
  30: {
    accountable: 'Texas',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [
        {
          additionalDescription: 'This is an additioanl discriordfd.',
          category: 'accountable',
          description: 'Same Description',
          icon: 'accountable/org',
          priority: 1,
          title: 'Texas',
        },
      ],
      purpose: [
        {
          additionalDescription: '',
          category: 'purpose',
          description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).',
          icon: 'purpose/mobility',
          priority: 0,
          title: 'Values / Time',
        },
        {
          additionalDescription: '',
          category: 'purpose',
          description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).',
          icon: 'purpose/agency',
          priority: 0,
          title: 'Agency sensor',
        },
      ],
      techType: [
        {
          additionalDescription: '...',
          category: 'techType',
          description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here',
          icon: 'tech/wave',
          priority: 0,
          title: 'Wireless Access Point',
        },
        {
          additionalDescription: '...',
          category: 'techType',
          description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here',
          icon: 'tech/air',
          priority: 0,
          title: 'Air Sensor',
        },
      ],
      dataType: [
        {
          additionalDescription: '...',
          category: 'dataType',
          description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)',
          icon: 'data/table',
          priority: 1,
          title: 'Tabular',
        },
      ],
      dataProcess: [
        {
          additionalDescription: '...',
          category: 'dataProcess',
          description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))',
          icon: 'process/encrypted',
          priority: 0,
          title: 'Encrypted',
        },
      ],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    FAQ: [
      {
        question: 'Question',
        response: 'Response',
      },
    ],
    headline: 'Soofa Sign',
    name: 'Texas Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    id: '30',
  },
};

export const splitSensorsByDataType = {
  other: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'New York',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'New York',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '20',
    name: 'New YorK Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }],
  taxonomyProp: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Boston',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'Lift does additional things like this and this', category: 'accountable', description: '...', icon: 'accountable/org', priority: 0, title: 'Lyft',
      }, {
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Boston',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] (https://en.wikipedia.org/wiki/Time_series).', icon: 'data/values', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '10',
    name: 'Boston Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    systems: { 10: { description: 'System Description', title: 'System Title' } },
  }, {
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Texas',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Texas',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/agency', priority: 0, title: 'Agency sensor',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }, {
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/air', priority: 0, title: 'Air Sensor',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '30',
    name: 'Texas Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }],
};

export const splitSensorsBySystems = {
  other: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'New York',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'New York',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '20',
    name: 'New YorK Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }, {
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Texas',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Texas',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/agency', priority: 0, title: 'Agency sensor',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }, {
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/air', priority: 0, title: 'Air Sensor',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '30',
    name: 'Texas Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }],
  taxonomyProp: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Boston',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'Lift does additional things like this and this', category: 'accountable', description: '...', icon: 'accountable/org', priority: 0, title: 'Lyft',
      }, {
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Boston',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] (https://en.wikipedia.org/wiki/Time_series).', icon: 'data/values', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '10',
    name: 'Boston Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    systems: { 10: { description: 'System Description', title: 'System Title' } },
  }],
};

export const sensorMappedIntoDataTypeValues = [[{
  description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
  id: '10',
  name: 'Boston Sensor',
  taxonomyPropValue: 'Values / Time',
}, {
  description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
  id: '10',
  name: 'Boston Sensor',
  taxonomyPropValue: 'Tabular',
}], [{
  description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
  id: '30',
  name: 'Texas Sensor',
  taxonomyPropValue: 'Tabular',
}]];

export const sensorsMappedIntoSystemValues = [[{
  description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '10', name: 'Boston Sensor', taxonomyPropValue: 'System Title',
}]];

export const sensorsGroupedByPurpose = {
  other: [],
  taxonomyProp: {
    'Agency sensor': [{
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '30', name: 'Texas Sensor', taxonomyPropValue: 'Agency sensor',
    }],
    'Values / Time': [{
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '10', name: 'Boston Sensor', taxonomyPropValue: 'Values / Time',
    }, {
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '20', name: 'New YorK Sensor', taxonomyPropValue: 'Values / Time',
    }, {
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '30', name: 'Texas Sensor', taxonomyPropValue: 'Values / Time',
    }],
  },
  taxonomyPropValues: ['Agency sensor', 'Values / Time'],
};

export const sensorsGroupedByDataType = {
  other: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'New York',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'New York',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '20',
    name: 'New YorK Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }],
  taxonomyProp: {
    Tabular: [{
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '10', name: 'Boston Sensor', taxonomyPropValue: 'Tabular',
    }, {
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '30', name: 'Texas Sensor', taxonomyPropValue: 'Tabular',
    }],
    'Values / Time': [{
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '10', name: 'Boston Sensor', taxonomyPropValue: 'Values / Time',
    }],
  },
  taxonomyPropValues: ['Tabular', 'Values / Time'],
};

export const sensorsGroupedBySystems = {
  other: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'New York',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'New York',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '20',
    name: 'New YorK Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }, {
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Texas',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Texas',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/agency', priority: 0, title: 'Agency sensor',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }, {
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/air', priority: 0, title: 'Air Sensor',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '30',
    name: 'Texas Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }],
  taxonomyProp: {
    'System Title': [{
      description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.", id: '10', name: 'Boston Sensor', taxonomyPropValue: 'System Title',
    }],
  },
  taxonomyPropValues: ['System Title'],
};

export const sensorsGroupedByNotFound = {
  other: [{
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Boston',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'Lift does additional things like this and this', category: 'accountable', description: '...', icon: 'accountable/org', priority: 0, title: 'Lyft',
      }, {
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Boston',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] (https://en.wikipedia.org/wiki/Time_series).', icon: 'data/values', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '10',
    name: 'Boston Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
    systems: { 10: { description: 'System Description', title: 'System Title' } },
  }, {
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'New York',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'New York',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '20',
    name: 'New YorK Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }, {
    FAQ: [{ question: 'Question', response: 'Response' }],
    accountable: 'Texas',
    accountableDescription: '...',
    accountableLogo: 'https://dl.airtable.com/.attachments/fa5625f90d3bbe6c7332c5a726527eae/5a58c601/soofalogo.png',
    datachain: {
      accountable: [{
        additionalDescription: 'This is an additioanl discriordfd.', category: 'accountable', description: 'Same Description', icon: 'accountable/org', priority: 1, title: 'Texas',
      }],
      dataProcess: [{
        additionalDescription: '...', category: 'dataProcess', description: 'Data that is stored in a table, where values are stored in rows and columns. More [here] (https://en.wikipedia.org/wiki/Table_(information))', icon: 'process/encrypted', priority: 0, title: 'Encrypted',
      }],
      dataType: [{
        additionalDescription: '...', category: 'dataType', description: 'Data has been encoded so that only authorized parties can access it, which can reduce risk related to handling private or sensitive information. Find out more [here] (https://en.wikipedia.org/wiki/Encryption)', icon: 'data/table', priority: 1, title: 'Tabular',
      }],
      purpose: [{
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/mobility', priority: 0, title: 'Values / Time',
      }, {
        additionalDescription: '', category: 'purpose', description: 'Measurements that are collected at regular intervals over a period of time. For example see [time series data] ( https://en.wikipedia.org/wiki/Time_series).', icon: 'purpose/agency', priority: 0, title: 'Agency sensor',
      }],
      techType: [{
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/wave', priority: 0, title: 'Wireless Access Point',
      }, {
        additionalDescription: '...', category: 'techType', description: 'Provides wireless access to a wired computer network, or to the internet. Find out more here', icon: 'tech/air', priority: 0, title: 'Air Sensor',
      }],
    },
    description: "A Soofa sign acts like a digital bulletin board where people can post content in their neighborhood through a central, online platform. In order to measure the reach of its messaging, the sign's sensors count how many people come within an approximately 150-foot radius.",
    email: '12345@22.22',
    headline: 'Soofa Sign',
    id: '30',
    name: 'Texas Sensor',
    phone: '123456789',
    placeId: '9UP3KDvEKqC-LvjYGibM6',
  }],
  taxonomyProp: {},
  taxonomyPropValues: [],
};
