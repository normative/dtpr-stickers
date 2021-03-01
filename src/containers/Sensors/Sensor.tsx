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

import { PlaceContext } from 'context/place';

import SensorView from 'components/Sensors/SensorView';
import { feedbackQuestionTypes } from 'common/constants';
import { LinearProgress } from 'libs/mui';
import { prepareSensorTaxonomy } from 'presenters/sensor';
import { FAQ, FeedbackQuestion, System } from 'common/types';
import NotFound from 'components/NotFound';

const FEEDBACK_QUESTIONS: FeedbackQuestion[] = [
  {
    text: 'How does this technology make you feel?',
    type: feedbackQuestionTypes.EMOJI,
  },
  {
    text: 'Is this information helpful?',
    type: feedbackQuestionTypes.EMOJI,
  },
  {
    text: 'How easy was this information to understand?',
    type: feedbackQuestionTypes.EMOJI,
  },
  {
    text: 'Was getting to the information on this page easy?',
    type: feedbackQuestionTypes.EMOJI,
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

  const sensorTaxonomy = useMemo(() => {
    if (!sensor.data) return {};
    return prepareSensorTaxonomy(sensor.data?.datachain);
  }, [sensorId, sensor.data]);

  const systems = useMemo(() => {
    if (!sensor.data?.systems) return [];
    return Object.values(sensor.data.systems) as System[];
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
      action: `${ACTIONS[type]} Feedback for question "${FEEDBACK_QUESTIONS[questionIndex]}": \n"${answer}"`,
      label: sensor.data?.name,
    });
  };

  if (sensor.didInvalidate) {
    return <NotFound message={sensor.error.message} code={sensor.error.code} />;
  }

  if (!sensor.data || sensor.isFetching) {
    return <LinearProgress color="primary" />;
  }

  return (
    <SensorView
      place={place.data}
      sensor={sensor.data}
      sensorTaxonomy={sensorTaxonomy}
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
