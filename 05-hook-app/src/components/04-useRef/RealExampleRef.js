import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../03-MultipleHooks-BreakingBad-API/MultipleCustomHooks";

export const RealExampleRef = () => {
	const [show, setShow] = useState(false);
	return (
		<>
			<h1>RealExampleRef</h1>
			<button onClick={() => setShow(!show)} className='btn btn-primary'>
				Show/Hide
			</button>
			<hr />

			{show && (
				<>
					<MultipleCustomHooks />
					<hr />{" "}
				</>
			)}
		</>
	);
};
