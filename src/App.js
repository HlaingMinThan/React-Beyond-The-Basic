import { useReducer } from 'react';
import './App.css'
function reducer(state, action) {
  switch (action.type) {
    case 'reset':
      return { count: 0 };
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0
  });

  return <div className="app">
    <div className='mx-auto'>
      <h1>Count: {state.count}</h1>
      <div>
        <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
    </div>
  </div>
}

export default App;
