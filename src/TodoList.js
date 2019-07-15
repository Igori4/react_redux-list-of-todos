import React from 'react';
import { connect } from 'react-redux';

const ToDoList = ({ count }) => {
  return (
    <h2>
      count:
      {count}
    </h2>
  );
};

const mapState = (state) => {
  return { count: state.count };
};

export default connect(mapState)(ToDoList);
