import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

const useStyles = makeStyles(theme => ({
  header: {
    [theme.breakpoints.up('sm')]: {
      fontSize: '1.5rem'
    },
  },
}));

function App() {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.header} variant="subtitle1" color="inherit">
            Fromage Heart
          </Typography>
        </Toolbar>
      </AppBar>
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>
          Click me
        </button>
      </div>
    </div>
  );
}

export default App;
