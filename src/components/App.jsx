import React from 'react';
import axios from 'axios';

import Joke from './Joke.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: { joke: "This is a great joke!" },
      usedJokes: []
    }

    this.jokeTimer;

    this.getJoke = this.getJoke.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
    this.checkJoke = this.checkJoke.bind(this);
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke() {
    const self = this;
    axios.get('/api/joke')
      .then((res) => {
        console.log('Joke: ', res.data.value);        
        this.checkJoke(res.data.value);
      })
      .catch(err => {
        console.log('Failed to get joke. ', err);
        this.getJoke();
      });
  }

  resetTimer() {
    clearTimeout(this.jokeTimer);
    this.jokeTimer = setTimeout(this.getJoke, 5000);
  }

  checkJoke(data) {
    if (this.state.usedJokes.includes(data.id)) {
      console.log('This joke is old news. ');
      this.getJoke();
    } else {
      data.joke = data.joke.replace(/&quot;/gi, '\"');
      this.state.usedJokes.push(data.id);
      this.setState({ joke: data });
      this.resetTimer();
    }
  }

  render() {
    return (
      <div id="app-container">
        <Joke joke={this.state.joke.joke} getJoke={this.getJoke}/>
      </div>
    );
  }
}

export default App;
