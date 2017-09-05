import React, {Component} from 'react';
import {ThemeProvider} from 'styled-components';
//import Unsplash, { toJson } from 'unsplash-js';
import Focus from '../Focus/Focus';
import BookmarksContainer from '../Bookmarks/BookmarksContainer';
import WeatherContainer from '../Weather/WeatherContainer';
import SettingsContainer from '../Settings/containers/SettingsContainer';
import CurrentQuoteContainer from '../CurrentQuote/CurrentQuoteContainer';
import ListContainer from '../Todo/containers/ListContainer';
//import backgrounds from '../../background.json';
import Clock from '../Clock/Clock';
import Welcome from '../Welcome/Welcome';
import Message from '../Message/Message';
import './App.scss';

/*const unsplash = new Unsplash({
  applicationId: process.env.REACT_APP_UNSPLASH_APP_ID,
  secret: process.env.REACT_APP_UNSPLASH_APP_SECRET,
  callbackUrl: process.env.REACT_APP_UNSPLASH_CALLBACK_URL
});
*/

const theme = {
  white: 'rgba(255,255,255,1)',
  grey: 'rgba(255,255,255,.15)',
  black: 'rgba(15, 15, 15, 0.925)'
};

class App extends Component {
  /*
  constructor() {
    super();
    this.state = {
      // date: '',
      time: '',
      background: '',
    }

  }
  componentDidMount() {
    this.setBackground();
  }
  setBackground() {
    // const today = new Date().toLocaleDateString();
    const time = new Date().getTime();
    const oldTime = +localStorage.getItem('time');
    const background = localStorage.getItem('background');
    // Change background every 15 minutes (for development)
    // OR set background if there isn't one in localStorage
    // if (today !== this.state.date) { // Change background every day
    if (time - oldTime > 15 * 60 * 1000 || background === null) {
      unsplash.photos.getRandomPhoto()
      .then(toJson)
      .then(json => {
        const { regular: background } = json.urls;
        this.setState({
          time,
          background
        });
        localStorage.setItem('time', time);
        localStorage.setItem('background', background);
      }).catch(
        err =>{
          console.log(err);
          const bgList=backgrounds.backgrounds;
          const rand=Math.floor(Math.random()*(bgList.length));
          this.setState({background:process.env.PUBLIC_URL+'./img/'+bgList[rand].filename});
        }
      );
    // Get background from localStorage
    } else {
      this.setState({
        // date: '',
        time,
        background
      });
    }
  }*/
  componentDidMount() {
    const {option, updateTime}= this.props;
    if(!option||option==='unsplash'){
      this.props.fetchBackground();
    }else if(option==='local'){
      this.props.fetchBackgroundLocal();
    }
    if(!updateTime){
      this.props.update(new Date());
    }
  }
  render() {
    const {
      background,
      time,
      focus,
      setFocus,
      deleteFocus,
      toggleFocus,
      updateTime,
      name,
      setName,
      apps
    } = this.props;
    if (!name || name === '') {
      return (
        <div className="App" style={{
          backgroundImage: `url(${background.bg})`
        }}>
          <header/>
          <main className="main">
            <Welcome setName={setName}/>
          </main>
          <footer/>
        </div>
      );
    } else {
      return (
        <ThemeProvider theme={theme}>
          <div className="App" style={{
            backgroundImage: `url(${background.bg})`
          }}>
            <header>
              <BookmarksContainer/>
              <WeatherContainer/>
            </header>

            <main className="main">
              <Clock state={apps.time} time={time} updateTime={updateTime}/>
              <Message state={apps.message} time={time} name={name}/>
              <Focus state={apps.focus} focus={focus} setFocus={setFocus} deleteFocus={deleteFocus} toggleFocus={toggleFocus}/>
            </main>

            <footer>
              <SettingsContainer/>
              <CurrentQuoteContainer/>
              <ListContainer state={apps.todo}/>
            </footer>
          </div>
        </ThemeProvider>
      );
    }
  }
}

export default App;
