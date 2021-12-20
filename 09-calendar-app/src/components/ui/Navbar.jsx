import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../actions/auth";
import { eventsCleaned } from "../../actions/events";

export const Navbar = () => {
	const dispatch = useDispatch();
	const { name } = useSelector((state) => state.auth);
	const handleExit = () => {
		dispatch(eventsCleaned())
		dispatch(startLogout());
	};

	return (
		<div className='navbar navbar-dark bg-dark mb-4'>
			<span className='navbar-brand'>{name}</span>
			<button className='btn btn-outline-danger' onClick={handleExit}>
				<i className='fas fa-sign-out-alt' />
				<span> Salir</span>
			</button>
		</div>
	);
};
