import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { actions } from './Store/index';
import Table from './Table';

const App = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const increase = () => {
    dispatch(actions.increment());
  };
  const decrease = () => {
    if (counterState > 0) dispatch(actions.decrement());
  };
  const adddby10 = () => {
    dispatch(actions.addBy(20));
  };
  const reset = () => {
    if (counterState !== 0) dispatch(actions.reset());
  };
  return (
    <div>
      {/* <Table /> */}
      <h1> Counter </h1>
      <h2> {counterState} </h2>
      <button onClick={increase}>INC</button>
      <button onClick={decrease}>DEC</button>
      <button onClick={adddby10}>ADD BY 10</button>
      <button onClick={reset}>RESET</button>
    </div>
  );
};

export default App;
