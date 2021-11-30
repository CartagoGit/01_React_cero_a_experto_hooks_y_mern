import React, { useMemo, useState } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const MemoHook = () => {
	const { counter, increment } = useCounter(5000);
	const [show, setShow] = useState(true);

	

	const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

	return (
		<>
			<h1>
				MemoHook:
				<small>{counter}</small>
			</h1>
			<hr />
			<p>{memoProcesoPesado}</p>

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
