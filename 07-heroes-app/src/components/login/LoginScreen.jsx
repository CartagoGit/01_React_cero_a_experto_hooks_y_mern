import React, { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthContext } from "../../auth/authContext";
import { useForm } from "../../hooks/useForm";
import { types } from "../../types/types";

export const LoginScreen = () => {
	const navigate = useNavigate();
	const { dispatch } = useContext(AuthContext);
	const [values, handleInputChange, resetInput] = useForm({ inputText: "" });
	const { inputText } = values;
	const [errorMessage, setErrorMessage] = useState("");
	const inputConditions = {
		smallerThan: (num) => inputText.length < num,
		greaterThan: (num) => num < inputText.length
	};
	const limitLetters = {
		min: 3,
		max: 15
	};

	const handleLogin = (e) => {
		e.preventDefault();
		if (
			inputConditions.smallerThan(limitLetters.min) ||
			inputConditions.greaterThan(limitLetters.max)
		) {
			if (inputConditions.smallerThan(limitLetters.min))
				setErrorMessage(
					() => `Nick needs more than ${limitLetters.min - 1} letters`
				);
			else if (inputConditions.greaterThan(limitLetters.max))
				setErrorMessage(
					() => `Nick cannot have more than ${limitLetters.max} letters`
				);
			resetInput();
			return;
		}
		setErrorMessage(() => "");
		const action = {
			type: types.login,
			payload: { nickname: inputText }
		};
		dispatch(action);

		const lastPath= localStorage.getItem('lastPath') || '/';
		navigate(lastPath, { replace: true });
	};

	return (
		<div className='container mt-5 animate__animated animate__fadeIn'>
			<h1>Login</h1>
			<hr />
			<form
				className='row gap-2 animate__animated animate__slideInUp'
				onSubmit={handleLogin}
			>
				<div className='col'>
					<input
						type='text'
						placeholder='Enter your nick for logging...'
						className='form-control  d-grid gap-2'
						name='inputText'
						autoComplete='off'
						value={inputText}
						onChange={handleInputChange}
					/>
				</div>
				<div className='col-2 d-grid gap-2'>
					<button className='btn btn-primary' type='submit'>
						Login
					</button>
				</div>
			</form>
			{(inputConditions.smallerThan(limitLetters.min) ||
				inputConditions.greaterThan(limitLetters.max)) && (
				<p className=' mt-1'>{errorMessage}</p>
			)}
		</div>
	);
};
