export enum StickerThemeVariant {
  BLACK = 'black',
  WHITE = 'white',
  BLUE = 'blue',
  YELLOW = 'yellow',
}

export enum taxonomyProps {
  ACCOUNTABLE = 'accountable',
  PURPOSE = 'purpose',
  TECH_TYPE = 'techType',
  DATA_TYPE = 'dataType',
  DATA_PROCESS = 'dataProcess',
  ACCESS = 'access',
  STORAGE = 'storage',
  SYSTEMS = 'systems',
}

/**
 * Map taxonomyProps to labels
 */
export enum taxonomyPropLabels {
  accountable = 'Accountability',
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
  [taxonomyProps.ACCESS]: 'access/placeholder',
  [taxonomyProps.DATA_PROCESS]: 'process/placeholder',
  [taxonomyProps.DATA_TYPE]: 'data/placeholder',
  [taxonomyProps.PURPOSE]: 'purpose/placeholder',
  [taxonomyProps.STORAGE]: 'storage/placeholder',
  [taxonomyProps.TECH_TYPE]: 'tech/placeholder',
};

export const HELPFULPLACES_WEBSITE = 'https://dtpr.helpfulplaces.com/';
