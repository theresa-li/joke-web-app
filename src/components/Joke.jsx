import React from 'react';

class Joke extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="joke-container">
        <div className="joke">{this.props.joke}</div>
        <button>New joke!</button>
      </div>
    );
  }
}

export default Joke;
