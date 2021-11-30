import React from "react";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";
import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
	const { counter, increment, decrement, setCounter } = useCounter(30);
	const maxCounter = [30, 102];
	const minCounter = [1, 63];
	const { loading, data } = useFetch(
		`https://www.breakingbadapi.com/api/quotes/${counter}`
	);
	const { author, quote = "There are not quote with that Id" } =
		!!data && !!data[0] && data[0];

	const next = () => {
		increment();
		counter === maxCounter[0] && setCounter(minCounter[1]);
	};

	const last = () => {
		decrement();
		counter === minCounter[1] && setCounter(maxCounter[0]);
	};

	return (
		<div>
			<h1>BreakingBad's Quotes</h1>
			<hr />
			{loading ? (
				<div className='alert alert-info text-center'>Loading...</div>
			) : (
				<blockquote className='blockquote text-end'>
					<p className='mb-3'>{quote}</p>
					<footer className='blockquote-footer'>{author}</footer>
				</blockquote>
			)}
            <hr/>
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
