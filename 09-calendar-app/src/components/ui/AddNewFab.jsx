//Fab -> Boton Flotante

import React from "react";
import { useDispatch } from "react-redux";
import { eventSetActive } from "../../actions/events";
import { uiOpenModal } from "../../actions/ui";

export const AddNewFab = () => {
	const dispatch = useDispatch();
	const handleClick = () => {
        dispatch(eventSetActive(null));
		dispatch(uiOpenModal());

	};

	return (
		<button className='btn btn-primary fab' onClick={handleClick}>
			<i className='fas fa-plus'></i>
		</button>
	);
};
