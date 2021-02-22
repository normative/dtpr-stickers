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
  progressText: string;
  progressValue: number;
}

function Feedback({
  classes, onClick, question, progressText, progressValue,
}: Props) {
  return (
    <div className={classes.container}>
      <LinearProgress
        className={classes.linearProgress}
        variant="determinate"
        value={progressValue}
        classes={{ barColorPrimary: classes.bar }}
      />
      <Typography className={classes.title}>Feedback</Typography>
      <FeedbackQuestion onClick={onClick} text={question.text} type={question.type} />
      <Typography className={classes.progressText}>
        {progressText}
      </Typography>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    backgroundColor: theme.custom.sessions.sensor.feedback.background,
    borderTop: `1px solid ${theme.custom.sessions.sensor.feedback.border}`,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    position: 'relative',
  },
  title: {
    color: theme.palette.secondary.main,
    fontWeight: 700,
  },
  progressText: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    ...theme.custom.fonts.secondary.s,
  },
  linearProgress: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  bar: {
    backgroundColor: theme.palette.secondary.main,
  },
});

export default withStyles(styles)(Feedback);
