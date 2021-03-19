import React from 'react';
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { Container } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

export default function Create() {
  return (
    <Container>
      <Typography
        variant='h6'
        component='h2'
        color='textSecondary'
        gutterBottom>
        Create a New Note
      </Typography>

      <Button
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
