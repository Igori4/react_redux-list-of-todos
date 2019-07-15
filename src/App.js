import React from 'react';
// import { createStore } from 'redux';

// let store = createStore();

class App extends React.Component {
  state = {
    count: 0,
  }

  increes = () => {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }

  dencrees = () => {
    this.setState(prevState => ({ count: prevState.count - 1 }));
  }

  render() {
    return (
      <div className="App">
        <h1>
          Count:
          {this.state.count}
        </h1>
        <button type="button" onClick={this.increes}>+</button>
        <button type="button" onClick={this.dencrees}>-</button>
      </div>
    );
  }
}

export default App;
