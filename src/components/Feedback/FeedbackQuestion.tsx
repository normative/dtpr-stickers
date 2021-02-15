import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { Typography } from 'libs/mui';
import { feedbackQuestionTypes } from 'common/constants';
import FeedbackEmojis from './FeedbackEmojis';

// interface Props {

// };
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
      {
        type === feedbackQuestionTypes.EMOJI && (
          <FeedbackEmojis onClick={onClick} />
        )
      }
      {
        type === feedbackQuestionTypes.EMAIL && (
          <div>{text}</div>
        )
      }
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
  },
});

export default withStyles(styles)(Feedback);
