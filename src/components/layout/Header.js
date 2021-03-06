import React from 'react';

import { Link } from 'react-router-dom';

import { signOut } from '../../helpers/auth';

import { createStyles, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'inherit',
      textDecoration: 'none',
    },
  })
);

/**
 * Application Header
 * @param {boolean} authenticated - indicates whether a user is logged in or not
 */

export default function Header({ authenticated }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='h1' className={classes.title}>
            <Link to='/' className={classes.link}>
              Super unique chat
            </Link>
          </Typography>
          {authenticated ? (
            <Button
              color='secondary'
              variant='contained'
              onClick={() => signOut()}
            >
              Log out
            </Button>
          ) : (
            <Button color='inherit'>
              <Link to='/login' className={classes.link}>
                Log in
              </Link>
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
