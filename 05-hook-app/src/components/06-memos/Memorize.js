import React, { useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { Small } from "./Small";
import "../02-useEffect/effects.css";

export const Memorize = () => {
	const { counter, increment } = useCounter(10);
	const [show, setShow] = useState(true);
	return (
		<>
			<h1>
				Memorize:{" "}
				<small>
					<Small value={counter} />
				</small>
			</h1>
			<hr />

			<button onClick={increment} className='btn btn-primary'>
				+1
			</button>

			<button
				onClick={() => setShow(!show)}
				className='btn btn-outline-primary ms-3'
			>
				Show/Hide {JSON.stringify(show)}
			</button>
		</>
	);
};
