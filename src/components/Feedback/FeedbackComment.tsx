import React, { useState } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { IconButton, Input, SendIcon } from 'libs/mui';

interface Props {
  onClick: (name: string) => void;
  classes: any;
}

function FeedbackComment({
  classes, onClick,
}: Props) {
  const [text, onChange] = useState('');
  return (
    <div className={classes.container}>
      <Input
        onChange={(e) => { onChange(e.target.value); }}
        value={text}
        placeholder="Your response"
        className={classes.input}
      />
      <IconButton
        onClick={() => onClick(text)}
        className={classes.button}
      >
        <SendIcon color="primary" />
      </IconButton>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    position: 'relative',
  },
  input: {
    paddingRight: theme.spacing(5),
    width: '100%',
  },
  button: {
    position: 'absolute',
    padding: 0,
    right: 0,
  },
  icon: {
    height: '24px',
    width: '24px',
  },
});

export default withStyles(styles)(FeedbackComment);
