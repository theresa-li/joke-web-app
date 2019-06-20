import React from 'react';
import axios from 'axios';

import Joke from './Joke.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "This is a great joke!"
    }

    this.jokeTimer;

    this.getJoke = this.getJoke.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentDidMount() {
    this.getJoke();
  }

  getJoke() {
    const self = this;
    axios.get('/api/joke')
      .then((res) => {
        console.log('Joke: ', res.data.value);
        res.data.value.joke = res.data.value.joke.replace(/&quot;/gi, '\"');
        self.setState({ joke: res.data.value });
        self.resetTimer();
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

  render() {
    return (
      <div id="app-container">
        <Joke joke={this.state.joke.joke} getJoke={this.getJoke}/>
      </div>
    );
  }
}

export default App;
