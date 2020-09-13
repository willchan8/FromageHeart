import React, { useState } from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import './App.css';
import header from './assets/header.png';

const useStyles = makeStyles(theme => ({
  header: {
    width: '320px',
    height: '80px',
    margin: '12px auto 0',
  },
  toolbar: {
    [theme.breakpoints.up('sm')]: {
      minHeight: '48px',
    },
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  tab: {
    [theme.breakpoints.down('sm')]: {
      fontSize: '1rem',
      padding: '8px'
    },
    padding: '0 16px',
    fontWeight: '300',
    letterSpacing: '0.03em',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    padding: '0 4px',
  }
}));

function App() {
  const [count, setCount] = useState(0);
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static">
        <img className={classes.header} src={header} alt="Fromage Heart"/>
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.tab} variant="h6" color="inherit">
            Home
          </Typography>
          <Typography className={classes.tab} variant="h6" color="inherit">
            About
          </Typography>
          <Typography className={classes.tab} variant="h6" color="inherit">
            Picnic Boxes
          </Typography>
          <Typography className={classes.tab} variant="h6" color="inherit">
            Grazing Tables
          </Typography>
          <Typography className={classes.tab} variant="h6" color="inherit">
            Charcuterie Boards
          </Typography>
          <Typography className={classes.tab} variant="h6" color="inherit">
            FAQs
          </Typography>
          <Typography className={classes.tab} variant="h6" color="inherit">
            Contact
          </Typography>
          <FacebookIcon className={classes.tab} />
          <InstagramIcon className={classes.tab} />
          <TwitterIcon className={classes.tab} />
          <MailOutlineIcon className={classes.tab} />
          <Typography className={classes.tab} variant="h6" color="inherit">
            Cart
            <ShoppingCartIcon className={classes.icon} />
            {`(${count})`}
          </Typography>
        </Toolbar>
      </AppBar>
      <button onClick={() => setCount(count + 1)}>
        Add Item to Cart
      </button>
    </div>
  );
}

export default App;
