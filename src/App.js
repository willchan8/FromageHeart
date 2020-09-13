import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import header from './assets/header.png';
import background from './assets/background.jpg';
import './App.css';

const useStyles = makeStyles(theme => ({
  header: {
    width: '320px',
    height: '80px',
    margin: '12px auto 0',
    zIndex: 100,
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
    [theme.breakpoints.up('sm')]: {
      fontSize: '1rem',
    },
    width: 'fit-content',
    minWidth: '90px',
    minHeight: '54px',
    padding: '0 16px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    padding: '0 8px',
  },
  backgroundContainer: {
    height: '100vh',
    overflow: 'hidden',
  },
  background: {
    backgroundImage: `url(${background})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh',
    animation: 'fadeInAnimation ease 1.5s, zoomOutAnimation 1.5s',
    animationIterationCount: '1',
    animationFillMode: 'forwards',
  },
}));

function App() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState(0);
  const classes = useStyles();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  }

  return (
    <div className="App">
      <AppBar position="fixed">
        <img className={classes.header} src={header} alt="Fromage Heart"/>
        <Toolbar className={classes.toolbar}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="scrollable"
          centered
        >
          <Tab className={classes.tab} label="Home" />
          <Tab className={classes.tab} label="About" />
          <Tab className={classes.tab} label="Picnic Boxes" />
          <Tab className={classes.tab} label="Grazing Tables" />
          <Tab className={classes.tab} label="Charcuterie Boards" />
          <Tab className={classes.tab} label="FAQs" />
          <Tab className={classes.tab} label="Contact" />
        </Tabs>
          <a href={'https://www.facebook.com/Fromage-Heart-100615558433767'}>
            <FacebookIcon className={classes.socialIcon} />
          </a>
          <a href={'https://www.instagram.com/fromageheart/'}>
            <InstagramIcon className={classes.socialIcon} />
          </a>
          <a href={'https://twitter.com/fromageheart'}>
            <TwitterIcon className={classes.socialIcon} />
          </a>
          <a href={'mailto:fromageheart@gmail.com'}>
            <MailOutlineIcon className={classes.socialIcon} />
          </a>
          <Tab className={classes.tab} onClick={() => setCount(count + 1)} icon={<ShoppingCartIcon />} label={`Cart (${count})`} />
        </Toolbar>
      </AppBar>
      <div className={classes.backgroundContainer}>
        <div className={classes.background}>
        </div>
      </div>
    </div>
  );
}

export default App;
