import { useState } from "react";

export const useCounter = (initialState = 0) => {
	const [counter, setCounter] = useState(initialState);

	const increment = (num=1) => {
		setCounter(counter => counter + num);
	};
	const decrement = (num=1) => {
		setCounter(counter => counter - num);
	};
	const reset = () => {
		setCounter(counter => counter = initialState);
	};

	return {
		counter,
		increment,
		decrement,
		reset,
		setCounter
	};
};
