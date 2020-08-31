import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
  chatTitle: {
    margin: '20px 0 0',
  },
  chatUserTitle: {
    margin: '20px 0 0',
  },
  chatWindow: {
    height: 300,
    maxHeight: 300,
    margin: '20px auto 0',
    overflow: 'scroll',
    background: 'lightgrey',
  },
});

const Chat = () => {
  const classes = useStyles();

  return (
    <>
      <Typography
        gutterBottom
        variant='h2'
        component='h2'
        align='center'
        className={classes.chatTitle}
      >
        Chat
      </Typography>
      <Paper elevation={3} className={classes.chatWindow}>
        chat window lorem400
      </Paper>
      <Typography
        variant='h4'
        component='h3'
        align='center'
        className={classes.chatUserTitle}
      >
        You are signed in as: 'test'
      </Typography>
    </>
  );
};

export default Chat;
