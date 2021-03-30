import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

export default function Create() {
  const classes = useStyles();

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setTitleError(false); //error status reset
    setDetailsError(false);
    if (title === '') {
      setTitleError(true);
    }
    if (details === '') {
      setDetailsError(true);
    }

    if (title && details) {
      console.log(title, details);
    }
  };

  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom>
        Create a New Note
      </Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label='Note title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          fullWidth
          required
          error={detailsError}
        />

        <Button
          variant='contained'
          type='submit'
          color='secondary'
          disableElevation
          endIcon={<SendIcon />}>
          Submit
        </Button>
      </form>
    </Container>
  );
}
