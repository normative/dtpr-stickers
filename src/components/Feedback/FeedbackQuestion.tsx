import React, { useEffect, useState } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { Typography, Fade } from 'libs/mui';
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

function FeedbackQuestion({
  classes, onClick, text, type,
}: Props) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, [text]);

  const handleOnClick = (value: string) => {
    setFade(false);
    setTimeout(() => {
      onClick(value);
    }, 35);
  };

  return (
    <Fade in={fade} timeout={30}>
      <div className={classes.container}>
        {
          type === feedbackQuestionTypes.THANKS ? (
            <FeedbackThanks />
          ) : (
            <>
              <Typography className={classes.text}>
                {text}
              </Typography>
              <div className={classes.answerContainer}>
                {
                  type === feedbackQuestionTypes.EMOJI && (
                    <FeedbackEmojis onClick={handleOnClick} />
                  )
                }
                {
                  type === feedbackQuestionTypes.COMMENT && (
                    <FeedbackComment onClick={handleOnClick} />
                  )
                }
              </div>
            </>
          )
        }
      </div>
    </Fade>
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
    ...theme.custom.fonts.secondary.m,
  },
  answerContainer: {
    minHeight: '50px',
  },
});

export default withStyles(styles)(FeedbackQuestion);
