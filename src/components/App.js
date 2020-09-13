import React from 'react';
import Header from './Header';
import About from './About';
import PicnicBoxes from './PicnicBoxes';
import GrazingTables from './GrazingTables';
import CharcuterieBoards from './CharcuterieBoards';
import Faqs from './Faqs';
import Contact from './Contact';
import { makeStyles } from '@material-ui/core/styles';
import background2 from '../assets/background2.jpg';
import logo from '../assets/logo.png';
import '../styles/App.css';

const useStyles = makeStyles(theme => ({
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
    height: '100vh',
    overflow: 'hidden',
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
  const classes = useStyles();

  return (
    <div className="App">
      <Header />
      <div className={classes.backgroundContainer}>
        <div className={classes.background}>
        </div>
        <img src={logo} alt="Logo" className={classes.logo}/>
      </div>
      <About />
      <PicnicBoxes />
      <GrazingTables />
      <CharcuterieBoards />
      <Faqs />
      <Contact />
    </div>
  );
}

export default App;
