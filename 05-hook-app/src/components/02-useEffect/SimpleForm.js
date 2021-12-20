import React, { useEffect, useState } from "react";
import { Message } from "./Message";
import "./effects.css";

export const SimpleForm = () => {
	const initialState = {
		name: "",
		email: ""
	};
	const [state, setstate] = useState(initialState);
	const { name, email } = state;

	useEffect(() => {
		console.log("Solo cuando inicia el componente");
	},[]);

    useEffect(() => {
		console.log("Cambio el form");
	},[state]);

    useEffect(() => {
		console.log("Cambio el email");
	},[email])

	const handleInputChange = ({ target }) => {
		setstate({
			...state,
			[target.name]: target.value
		});
	};

	return (
		<>
			<h1>useEffect</h1>
			<hr />
			<div className='form-group'>
				<input
					type='text'
					name='name'
					className='form-control'
					placeholder='Tu nombre'
					autoComplete='off'
					value={name}
					onChange={handleInputChange}
				/>
			</div>
            <div className='form-group'>
				<input
					type='text'
					name='email'
					className='form-control'
					placeholder='email@gmail.com'
					autoComplete='off'
					value={email}
					onChange={handleInputChange}
				/>
			</div>

			{name==='123' && <Message />}
		</>
	);
};
