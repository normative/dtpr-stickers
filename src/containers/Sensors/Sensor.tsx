import React, {
  useContext, useEffect, useMemo, useState,
} from 'react';
import { useParams } from 'react-router-dom';
import ReactGA from 'react-ga';

import { getSensor } from 'sideEffects/firebase';
import sensorReducer, {
  sensorInitialState,
  fetchSensorRequested,
  fetchSensorSuccessed,
  fetchSensorFailed,
} from 'reducers/sensor';

import useReducerState from 'hooks/useReducerState';

import { AirtableContext } from 'context/airtable';
import { PlaceContext } from 'context/place';

import SensorView from 'components/Sensors/SensorView';
import { feedbackQuestionTypes, sensorsGroupNames } from 'common/constants';
import { LinearProgress } from 'libs/mui';
import { prepareSensorsGroups } from 'presenters/sensor';
import { FAQ, FeedbackQuestion } from 'common/types';

const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  {
    text: 'Is this information helpful?',
    type: feedbackQuestionTypes.EMOJI,
  },
  {
    text: 'How did you find the process of reading the sign, scanning the QR code, and then reading the information on the phone?',
    type: feedbackQuestionTypes.EMOJI,
  },
  {
    text: 'Do you have any questions or concerns?',
    type: feedbackQuestionTypes.COMMENT,
  },
  {
    text: 'How would you rate this app?',
    type: feedbackQuestionTypes.EMOJI,
  },
  {
    text: '',
    type: feedbackQuestionTypes.THANKS,
  },
];

const FEEDBACK_QUESTIONS_LENGTH = FEEDBACK_QUESTIONS.length - 1;

const ACTIONS = {
  [feedbackQuestionTypes.EMOJI]: 'Clicked',
  [feedbackQuestionTypes.COMMENT]: 'Commented',
};

function calcFeedbackProgress(questionIndex: number) {
  return (questionIndex / FEEDBACK_QUESTIONS_LENGTH) * 100 || 2.5;
}

function getProgressText(questionIndex: number) {
  if (questionIndex >= FEEDBACK_QUESTIONS_LENGTH) return '';
  return `${questionIndex + 1} / ${FEEDBACK_QUESTIONS_LENGTH} answered`;
}

function Sensor() {
  const [sensor, sensorActions] = useReducerState(
    sensorReducer,
    sensorInitialState,
    fetchSensorRequested,
    fetchSensorSuccessed,
    fetchSensorFailed,
  );
  const [place, placeActions] = useContext(PlaceContext);
  const airtable = useContext(AirtableContext);
  const { sensorId }: { sensorId: string } = useParams();
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    sensorActions.onRequest();
    getSensor(sensorId, sensorActions.onSuccess, sensorActions.onError);
  }, [sensorId]);

  useEffect(() => {
    if (sensor.data) {
      placeActions.onRequest(sensor.data.placeId);
    }
  }, [sensor.data]);

  const sensorsGroup = useMemo(() => {
    if (!sensor.data || !airtable.data) return [];
    return prepareSensorsGroups(sensorId, sensor.data, airtable.data);
  }, [sensorId, sensor.data, airtable.data]);

  const techType = useMemo(() => sensorsGroup.find(
    ({ sensorGroup }) => sensorGroup === sensorsGroupNames.TECH_TYPE,
  ), [sensorsGroup]);

  const purpose = useMemo(() => sensorsGroup.find(
    ({ sensorGroup }) => sensorGroup === sensorsGroupNames.PURPOSE,
  ), [sensorsGroup]);

  const systems = useMemo(() => {
    if (!sensor.data?.systems) return [];
    return Object.values(sensor.data.systems).map(({ title }) => title);
  }, [sensor.data]);

  const faq = useMemo(() => {
    if (!sensor.data?.FAQ) return [];
    return Object.values(sensor.data.FAQ) as FAQ[];
  }, [sensor.data]);

  const onResponse = (type: string, answer: string) => {
    setQuestionIndex(questionIndex + 1);
    setAnswers(answers.concat(answer));

    ReactGA.event({
      category: 'User',
      action: `${ACTIONS[type]} Feedback: ${answer}`,
      label: sensor.data?.name,
    });
  };

  if (!sensor.data || sensor.isFetching || !airtable.data || airtable.isFetching) {
    return <LinearProgress color="secondary" />;
  }

  return (
    <SensorView
      place={place.data}
      sensor={sensor.data}
      techType={techType}
      purpose={purpose}
      sensorsGroup={sensorsGroup}
      systems={systems}
      faq={faq}
      onResponse={(answer: string) => {
        onResponse(FEEDBACK_QUESTIONS[questionIndex].type, answer);
      }}
      question={FEEDBACK_QUESTIONS[questionIndex]}
      progressText={getProgressText(questionIndex)}
      progressValue={calcFeedbackProgress(questionIndex)}
    />
  );
}

export default Sensor;
