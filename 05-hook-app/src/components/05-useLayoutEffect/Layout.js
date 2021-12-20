import React, { useLayoutEffect, useRef, useState } from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "./layout.css";

export const Layout = () => {
	const { counter, increment, decrement, setCounter } = useCounter(30);
	const maxCounter = [30, 102];
	const minCounter = [1, 63];
	const { data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	const { quote } = !!data && !!data[0] && data[0];

	const next = () => {
		increment();
		counter === maxCounter[0] && setCounter(minCounter[1]);
	};

	const last = () => {
		decrement();
		counter === minCounter[1] && setCounter(maxCounter[0]);
	};

	const pTag = useRef();
	const [boxSize, setBoxSize] = useState({});

	useLayoutEffect(() => {
		setBoxSize(pTag.current.getBoundingClientRect());
	}, [quote]);

	return (
		<div>
			<h1>LayoutEffect</h1>
			<hr />

			<blockquote className='blockquote justify-content-end'>
				<p className='mb-0' ref={pTag}>
					{quote}
				</p>
			</blockquote>

			<pre>{JSON.stringify(boxSize,null,3)}</pre>
			<hr />
			<div className='d-flex justify-content-between'>
				{minCounter[0] < counter && (
					<button onClick={last} className='btn btn-primary'>
						Last Quote
					</button>
				)}

				{counter < maxCounter[1] && (
					<button onClick={next} className='btn btn-primary ms-auto'>
						Next Quote
					</button>
				)}
			</div>
		</div>
	);
};
