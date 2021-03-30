import React from 'react';
import { useEffect, useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function Notes() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8000/notes`)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, []);

  return (
    <div>
      <Grid container>
        {notes.map((note) => (
          <Grid item key={note.id} xs={12} lg={4} md={6}>
            <Paper> {note.title}</Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
