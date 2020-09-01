import React, { useState } from 'react';

import { signInWithGoogle } from '../helpers/auth';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import googleIcon from './images/google-icon.svg';

const useStyles = makeStyles({
  loginPage: {
    textAlign: 'center',
  },
  icon: {
    '&:hover': {
      cursor: 'pointer',
      transform: 'scale(1.1)',
    },
  },
});

/**
 * Create Log in page
 */
const LogIn = () => {
  const [error, setError] = useState(false);
  const classes = useStyles();

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className={classes.loginPage}>
      <Typography variant='h2' component='h2' align='center' gutterBottom>
        Click on Google icon to sign in
      </Typography>
      <img
        src={googleIcon}
        alt='google icon'
        height='100'
        className={classes.icon}
        onClick={handleSignIn}
      />
      <br />
      {error && error}
    </div>
  );
};

export default LogIn;
