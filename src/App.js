import React from 'react';
import { connect } from 'react-redux';
import ToDoList from './TodoList';

const App = ({ count, increase, decrease }) => (
  <div className="App">
    <h1>
      Count:
      {count}
    </h1>
    <button type="button" onClick={increase}>+</button>
    <button type="button" onClick={decrease}>-</button>

    <ToDoList />
  </div>
);

const mapState = (state) => {
  return {
    count: state.count,
  };
};

const mapDispatch = (dispatch) => {
  return {
    increase: () => dispatch({ type: 'increase', value: 1 }),
    decrease: () => dispatch({ type: 'decrease', value: 1 }),
  };
};

const AppWithReact = connect(mapState, mapDispatch)(App);
export default AppWithReact;
