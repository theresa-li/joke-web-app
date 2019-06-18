import React from 'react';
import axios from 'axios';

import Joke from './Joke.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "This is a great joke!"
    }

    this.getJoke = this.getJoke.bind(this);
  }

  componentDidMount() {
    const self = this;
    this.getJoke();
  }

  getJoke() {
    const self = this;
    axios.get('/api/joke')
      .then((res) => {
        console.log('Joke: ', res.data.value);
        res.data.value.joke.replace(/&quot;/g, '\\"');
        self.setState({ joke: res.data.value });
      })
      .catch(err => {
        console.log('Failed to get joke.', err);
        this.getJoke();
      });
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
