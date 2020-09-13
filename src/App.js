import React, { useState } from 'react';
import { AppBar, Toolbar, Tabs, Tab, Link } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import header from './assets/header.png';
import background from './assets/background.jpg';
import background2 from './assets/background2.jpg';
import logo from './assets/logo.png';
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
    [theme.breakpoints.down('sm')]: {
      fontSize: '0.75rem',
      padding: '0 8px',
    },
    fontSize: '1rem',
    width: 'fit-content',
    minWidth: '90px',
    minHeight: '54px',
    borderRadius: '8px 8px 0 0',
    padding: '0 16px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    padding: '0 8px',
  },
  background: {
    backgroundImage: `url(${background2})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh',
    animation: 'fadeInAnimation ease 1.5s, zoomOutAnimation 1.5s',
    animationIterationCount: '1',
    animationFillMode: 'forwards',
    filter: 'brightness(65%)',
  },
  backgroundContainer: {
    position: 'relative',
  },
  logo: {
    position: 'absolute',
    left: '0',
    right: '0',
    top: '150px',
    margin: 'auto',
    height: '75vh',
    width: '75vh',
  }
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
          <Link href={'https://www.facebook.com/Fromage-Heart-100615558433767'} color="inherit">
            <FacebookIcon className={classes.socialIcon} />
          </Link>
          <Link href={'https://www.instagram.com/fromageheart/'} color="inherit">
            <InstagramIcon className={classes.socialIcon} />
          </Link>
          <Link href={'https://twitter.com/fromageheart'} color="inherit">
            <TwitterIcon className={classes.socialIcon} />
          </Link>
          <Link href={'mailto:fromageheart@gmail.com'} color="inherit">
            <MailOutlineIcon className={classes.socialIcon} />
          </Link>
          <Tab className={classes.tab} onClick={() => setCount(count + 1)} icon={<ShoppingCartIcon />} label={`Cart (${count})`} />
        </Toolbar>
      </AppBar>
      <div className={classes.background}>
      </div>
      <img src={logo} alt="Logo" className={classes.logo}/>
    </div>
  );
}

export default App;
