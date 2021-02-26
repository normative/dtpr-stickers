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
        classes={{ barColorPrimary: classes.barColorPrimary }}
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
    backgroundColor: theme.custom.palette.background.primary,
    borderTop: `1px solid ${theme.custom.elements.divider}`,
    padding: theme.spacing(2),
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    position: 'relative',
  },
  title: {
    fontWeight: 700,
    ...theme.custom.fonts.primary.m,
    color: theme.custom.palette.text.dark,
  },
  progressText: {
    textAlign: 'center',
    marginTop: theme.spacing(3),
    ...theme.custom.fonts.secondary.s,
    color: theme.custom.palette.text.dark,
  },
  linearProgress: {
    backgroundColor: 'transparent',
    bottom: 0,
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },
  barColorPrimary: {
    backgroundColor: theme.custom.palette.background.secondary,
  },
});

export default withStyles(styles)(Feedback);
