import React from 'react';

import Joke from './Joke.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      joke: "This is a great joke!"
    }
  }

  render() {
    return (
      <div id="app-container">
        <Joke joke={this.state.joke}/>
      </div>
    );
  }
}

export default App;
