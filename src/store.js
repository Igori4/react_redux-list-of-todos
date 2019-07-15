import { createStore } from 'redux';

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case 'increase':
      return {
        count: state.count + action.value,
      };
    case 'decrease':
      return {
        count: state.count - action.value,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, initialState);

export default store;