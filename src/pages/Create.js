import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  btn: {
    backgroundColor: 'violet',
    fontSize: 25,
    '&:hover': {
      backgroundColor: 'crimson',
    },
  },
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

export default function Create() {
  const classes = useStyles();

  return (
    <Container>
      <Typography
        className={classes.title}
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom>
        Create a New Note
      </Typography>

      <Button
        className={classes.btn}
        onClick={() => console.log('Click')}
        variant='contained'
        type='submit'
        color='secondary'
        disableElevation
        endIcon={<SendIcon />}>
        Submit
      </Button>
    </Container>
  );
}
