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
  [taxonomyProps.ACCOUNTABLE]: 'placeholders/accountable',
  [taxonomyProps.ACCESS]: 'placeholders/access',
  [taxonomyProps.DATA_PROCESS]: 'placeholders/process',
  [taxonomyProps.DATA_TYPE]: 'placeholders/data',
  [taxonomyProps.PURPOSE]: 'placeholders/purpose',
  [taxonomyProps.STORAGE]: 'placeholders/storage',
  [taxonomyProps.TECH_TYPE]: 'placeholders/tech',
};

export const HELPFULPLACES_WEBSITE = 'https://dtpr.helpfulplaces.com/';
