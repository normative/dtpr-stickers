import React, { useState } from 'react';
import {
  createStyles,
  Theme,
  withStyles,
} from '@material-ui/core/styles';

import { Button, CheckIcon, Input } from 'libs/mui';

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
      <Button
        variant="outlined"
        color="primary"
        onClick={() => onClick(text)}
        className={classes.button}
      >
        <CheckIcon className={classes.icon} />
      </Button>
    </div>
  );
}

const styles = (theme: Theme) => createStyles({
  container: {
    display: 'flex',
  },
  input: {
    width: '100%',
    marginRight: theme.spacing(2),
  },
  button: {
    padding: 0,
  },
  icon: {
    height: '24px',
    width: '24px',
  },
});

export default withStyles(styles)(FeedbackComment);
