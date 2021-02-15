import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { Typography } from 'libs/mui';
import { feedbackQuestionTypes } from 'common/constants';
import FeedbackEmojis from './FeedbackEmojis';
import FeedbackComment from './FeedbackComment';
import FeedbackThanks from './FeedbackThanks';

interface Props {
  onClick: (name: string) => void;
  classes: any;
  text: string;
  type: string;
}

function Feedback({
  classes, onClick, text, type,
}: Props) {
  return (
    <div className={classes.container}>
      <Typography className={classes.text}>
        {text}
      </Typography>
      <div className={classes.answerContainer}>
        {
          type === feedbackQuestionTypes.EMOJI && (
            <FeedbackEmojis onClick={onClick} />
          )
        }
        {
          type === feedbackQuestionTypes.COMMENT && (
            <FeedbackComment onClick={onClick} />
          )
        }
        {
          type === feedbackQuestionTypes.THANKS && (
            <FeedbackThanks />
          )
        }
      </div>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
  },
  text: {
    margin: theme.spacing(2),
    marginLeft: 0,
    marginRight: 0,
    minHeight: '50px',
  },
  answerContainer: {
    minHeight: '50px',
  },
});

export default withStyles(styles)(Feedback);
