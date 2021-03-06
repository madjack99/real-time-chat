import React, { useState, useEffect } from 'react';

import { auth, db } from '../services/firebase';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const guestMessageColor = blue[700];
const myMessageColor = green[500];

const useStyles = makeStyles({
  chatTitle: {
    margin: '20px 0 0',
  },
  chatUserTitle: {
    margin: '20px 0 0',
  },
  chatWindow: {
    boxSizing: 'border-box',
    width: 300,
    height: 300,
    maxHeight: 300,
    padding: 15,
    margin: '20px auto 0',
    overflow: 'auto',
    background: '#ffffff',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 300,
    margin: '20px auto',
  },
  message: {
    padding: 10,
    borderRadius: 10,
    wordBreak: 'break-all',
  },
  myMessage: {
    background: myMessageColor,
    color: '#ffffff',
  },
  guestMessage: {
    background: guestMessageColor,
    color: '#ffffff',
  },
});

/**
 * Create chat page where subscription to the firesbase realtime
 * database is performed to track new messages in real time
 */
const Chat = () => {
  const [user] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [writeError, setWriteError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setReadError(null);

    try {
      db.ref('my-super-unique-chat').on('value', (snapshot) => {
        const updatedChats = [];

        snapshot.forEach((snap) => {
          updatedChats.push(snap.val());
        });

        setChats(updatedChats);
      });
    } catch (error) {
      setReadError(error.message);
    }
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.currentTarget.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setWriteError(null);

    try {
      await db.ref('my-super-unique-chat').push({
        content: `${user.displayName}: ${inputValue}`,
        timestamp: Date.now(),
        uid: user.uid,
      });

      setInputValue('');
    } catch (error) {
      setWriteError(error.message);
    }
  };

  const drawMessages = () => {
    return chats.map((chat) =>
      chat.uid === user.uid ? (
        <p
          key={chat.timestamp}
          className={`${classes.myMessage} ${classes.message}`}
        >
          {chat.content}
        </p>
      ) : (
        <p
          key={chat.timestamp}
          className={`${classes.guestMessage} ${classes.message}`}
        >
          {chat.content}
        </p>
      )
    );
  };

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
      <Typography
        variant='h5'
        component='h3'
        align='center'
        color='primary'
        className={classes.chatUserTitle}
      >
        You are signed in as: {user.displayName}
      </Typography>
      <Typography variant='body1' align='center' color='secondary'>
        {readError && readError}
      </Typography>
      <Paper elevation={3} className={classes.chatWindow}>
        {drawMessages()}
      </Paper>
      <form className={classes.form} onSubmit={handleSubmit}>
        <TextField
          label='Your message'
          variant='outlined'
          value={inputValue}
          onChange={handleInputChange}
        />
        <Button type='submit' color='primary' variant='contained'>
          Send
        </Button>
      </form>
      <Typography variant='body1' align='center' color='secondary'>
        {writeError && writeError}
      </Typography>
    </>
  );
};

export default Chat;
