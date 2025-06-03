import { useReducer } from "react";

 type CounterState = {
    count : number
 }
 type CounterAction = {
    type : 'increment' | 'decrement' | 'reset'
    payload : number
 }

const initialState = { count: 0 };

function reducer(state:CounterState, action:CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
      case "decrement":
          if (action.payload <= state.count) {
            return { count: state.count - action.payload };
          };
      case "reset":
        return initialState;
    default:
      return state;
  }
}

const Counter = () => {
     const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
    Count : {state.count}
    <button onClick={() =>dispatch({type: 'increment', payload : 10})}> 
        Increment10
    </button>
    <button onClick={() =>dispatch({type: 'decrement', payload: 10})}>
        Decrement10
    </button>
    <button onClick={() => dispatch({type: 'reset', payload: 0})}>
        Reset
    </button>
    </>
  )
};

export default Counter;
