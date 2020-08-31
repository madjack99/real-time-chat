import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import chatIcon from './images/chat-icon.svg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: '20px auto 0',
  },
  media: {
    height: 300,
  },
});

const Home = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={chatIcon}
          title='chat icon'
        />
        <CardContent>
          <Typography gutterBottom variant='h5' component='h2'>
            Chat
          </Typography>
          <Typography variant='body2' color='textSecondary' component='p'>
            Please, use log in button in the header to log in. At the moment
            only sign in with Google option exists. Other ways may be added by
            demand.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default Home;
