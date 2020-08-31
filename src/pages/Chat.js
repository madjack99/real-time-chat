import React, { useState, useEffect } from 'react';

import { auth, db } from '../services/firebase';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  chatTitle: {
    margin: '20px 0 0',
  },
  chatUserTitle: {
    margin: '20px 0 0',
  },
  chatWindow: {
    width: 300,
    height: 300,
    maxHeight: 300,
    margin: '20px auto 0',
    // overflow: 'scroll',
    background: 'darkgrey',
  },
  form: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 300,
    margin: '20px auto',
  },
});

const Chat = () => {
  const [user, setUser] = useState(auth().currentUser);
  const [chats, setChats] = useState([]);
  const [readError, setReadError] = useState(null);
  const [inputValue, setInputValue] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setReadError(null);

    try {
      db.ref('my-super-unique-chat').on('value', (snapshot) => {
        const updatedChats = [];

        console.log(snapshot);
        snapshot.forEach((snap) => {
          console.log(snap);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputValue);
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
      <Paper elevation={3} className={classes.chatWindow}>
        {chats.map((chat) => (
          <p key={chat.timestamp}>{chat.content}</p>
        ))}
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
    </>
  );
};

export default Chat;
