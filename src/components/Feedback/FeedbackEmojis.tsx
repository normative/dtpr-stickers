import React from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { Button, Typography } from 'libs/mui';
import { feedbackEmojis } from 'common/constants';
import FeedbackEmoji from '../Svgs/FeedbackEmoji';

// interface Props {

// };
interface Props {
  onClick: (name: string) => void;
  classes: any;
}

const emojisList = [
  { name: feedbackEmojis.VERY_SAD, color: '#E53319', bgColor: '#FCDBD4' },
  { name: feedbackEmojis.SAD, color: '#D6752A', bgColor: '#FDE8D7' },
  { name: feedbackEmojis.NEUTRAL, color: '#BB9F5D', bgColor: '#FFF5D7' },
  { name: feedbackEmojis.HAPPY, color: '#74994D', bgColor: '#E6F6D4' },
  { name: feedbackEmojis.VERY_HAPPY, color: '#16A04D', bgColor: '#CDF1E0' },
];

function Feedback({ classes, onClick }: Props) {
  return (
    <div className={classes.container}>
      {emojisList.map(({ name, color, bgColor }) => (
        <Button
          variant="outlined"
          disableRipple
          className={classes.button}
          style={{
            backgroundColor: bgColor,
          }}
          onClick={() => onClick(name)}
        >
          <FeedbackEmoji emoji={name} color={color} />
        </Button>
      ))}
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  button: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
    borderRadius: '6px',
    '&:hover': {
      border: '1px solid rgba(0, 0, 0, 0.1)',
    },
    margin: theme.spacing(0.5),
    minHeight: '41px',
    minWidth: '41px',
    width: '100%',
    '&:first-child': {
      marginLeft: 0,
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
});

export default withStyles(styles)(Feedback);
