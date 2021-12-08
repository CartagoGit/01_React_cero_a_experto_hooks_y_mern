import React from "react";
import { errorsImages } from "../../helpers/getImages";

export const ErrorScreen = ({message = "This page doesn't exist"}) => {
	const urlError = errorsImages("./error_enigma.jpg").default;
	return (
		<div className='row justify-content-center text-center animate__fadeIn animate__slowest'>
			<h1>{message}</h1>
			<img src={urlError} className='card p-0' alt={message}></img>
			<h2>Nigma is playing with your brain</h2>
		</div>
	);
};
