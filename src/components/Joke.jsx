import React from 'react';

const styles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column',
  margin: '50px'
}

class Joke extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="joke-container" style={styles}>
        <div className="joke">{this.props.joke}</div>
        <button onClick={this.props.getJoke}>New joke!</button>
      </div>
    );
  }
}

export default Joke;
