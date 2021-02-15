import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import FeedbackQuestion from 'components/Feedback/FeedbackQuestion';
import { Typography, LinearProgress } from 'libs/mui';
import { FeedbackQuestion as FeedbackQuestionType } from 'common/types';

interface Props {
  onClick: (answer: string) => void;
  classes: any;
  question: FeedbackQuestionType;
  questionIndex: number;
  questionsLength: number;
}

function Feedback({
  classes, onClick, question, questionsLength, questionIndex,
}: Props) {
  return (
    <div className={classes.container}>
      <LinearProgress className={classes.linearProgress} variant="determinate" value={(questionIndex / questionsLength) * 100} />
      <Typography className={classes.title}>Feedback</Typography>
      <FeedbackQuestion onClick={onClick} text={question.text} type={question.type} />
      <Typography className={classes.progressText}>
        {questionIndex}
        {' '}
        /
        {' '}
        {questionsLength}
        {' '}
        answered
      </Typography>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    backgroundColor: '#F7F7F7',
    borderTop: '1px solid #B4B4B4',
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
  },
  title: {
    fontWeight: 700,
  },
  progressText: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    fontSize: '0.875rem',
    letterSpacing: '0.15px',
  },
  linearProgress: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
});

export default withStyles(styles)(Feedback);
