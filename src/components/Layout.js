import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  page: {
    backgroundColor: '#f9f9f9',
    width: '100%',
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div>
      {/* app bar */}

      {/* side drawer */}

      <div className={classes.page}>{children}</div>
    </div>
  );
};

export default Layout;
