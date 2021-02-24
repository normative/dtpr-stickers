export enum StickerThemeVariant {
  BLACK = 'black',
  WHITE = 'white',
  BLUE = 'blue',
  YELLOW = 'yellow',
}

export enum sessionKeys {
  AIRTABLE = 'airtableData',
}

export enum sensorsGroupNames {
  PURPOSE = 'purpose',
  TECH_TYPE = 'techType',
  DATA_TYPE = 'dataType',
  DATA_PROCESS = 'dataProcess',
  ACCESS = 'access',
  STORAGE = 'storage',
  SYSTEMS = 'systems',
}
/**
 * Map sensor group names to labels
 */
export enum sensorsGroupLabels {
  accountability = 'Accountability',
  purpose = 'Purpose',
  techType = 'Technology Type',
  dataType = 'Data Type',
  dataProcess = 'Data Process',
  access = 'Access',
  storage = 'Storage',
  systems = 'Systems',
}

export enum feedbackEmojis {
  VERY_SAD = 'verySad',
  SAD = 'sad',
  NEUTRAL = 'neutral',
  HAPPY = 'happy',
  VERY_HAPPY = 'veryHappy',
}

export enum feedbackQuestionTypes {
  COMMENT = 'comment',
  EMOJI = 'emoji',
  THANKS = 'thanks',
}

export const PLACEHOLDERS = {
  [sensorsGroupNames.ACCESS]: 'access/placeholder',
  [sensorsGroupNames.DATA_PROCESS]: 'process/placeholder',
  [sensorsGroupNames.DATA_TYPE]: 'data/placeholder',
  [sensorsGroupNames.PURPOSE]: 'purpose/placeholder',
  [sensorsGroupNames.STORAGE]: 'storage/placeholder',
  [sensorsGroupNames.SYSTEMS]: 'system/placeholder',
  [sensorsGroupNames.TECH_TYPE]: 'tech/placeholder',
};

export const HELPFULPLACES_WEBSITE = 'https://dtpr.helpfulplaces.com/';
