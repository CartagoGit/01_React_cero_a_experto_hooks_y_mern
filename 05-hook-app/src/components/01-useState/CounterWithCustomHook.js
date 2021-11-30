import React from "react";
import { useCounter } from "../../hooks/useCounter";
import './counter.css';

export const CounterWithCustomHook = () => {
    const {state: counter, increment, decrement, reset} = useCounter(123);
	return (
		<>
			<h1>Counter with Hook: {counter}</h1>
			<hr />
			<button onClick={()=>increment(2)} className='btn'>+1</button>
            <button onClick={reset} className='btn'>Reset</button>
			<button onClick={()=>decrement(3)} className='btn'>-1</button>
		</>
	);
};
