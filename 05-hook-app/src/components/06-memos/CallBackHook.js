import React, { useCallback, useEffect, useState } from "react";
import "../02-useEffect/effects.css";
import { ShowIncrement } from "./ShowIncrement";

export const CallBackHook = () => {
	const [counter, setCounter] = useState(10);

	const increment = useCallback(
		(num = 1) => {
			// setCounter(counter + 1);
			setCounter((c) => c + num);
		},
		[setCounter]
	);

    useEffect(() => {
        
        // ?? Un uso tambien posible del useCallBack 
    }, [increment])

	return (
		<>
			<h1>CallBackHook: {counter}</h1>
			<hr />

			<ShowIncrement increment={increment} />
		</>
	);
};
