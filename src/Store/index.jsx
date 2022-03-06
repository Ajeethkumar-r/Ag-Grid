import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counter',
  initialState: { counter: 0 },
  reducers: {
    increment(state, action) {
      state.counter++;
    },
    decrement(state, action) {
      state.counter++;
    },
    addBy(state, action) {
      state.counter += action.payload;
    },
    reset(state, action) {
      return { counter: 0 };
    },
  },
});

export const actions = counterSlice.actions;

const store = configureStore({
  reducer: counterSlice.reducer,
});

export default store;
// <--! createStore-->
// import { createStore } from 'redux';
// const intialState = {
//   counter: 0,
// };
// const reducerFn = (state = intialState, action) => {
//   switch (action.type) {
//     case 'INC':
//       return { counter: state.counter + 1 };
//     case 'DEC':
//       return { counter: state.counter - 1 };
//     case 'ADD':
//       return { counter: state.counter + action.payload };
//     case 'RESET':
//       return { counter: 0 };
//     default:
//       return state;
//   }
// };

// const store = createStore(reducerFn);

// export default store;
