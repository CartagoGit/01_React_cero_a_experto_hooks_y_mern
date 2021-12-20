// import moment from "moment";
import { types } from "../types/types";
// {
// 	title: "Cumpleaños del Jefe",
// 	start: moment().toDate(),
// 	end: moment().add(2, "hours").toDate(),
// 	bgcolor: "#fafafa", // Se pueden añadir objetos random
// 	notes: "Comprar el pastel",
// 	user: {
// 		_id: "123",
// 		name: "Mario"
// 	}
// }

const initialState = {
	events: [],
	activeEvent: null
};

export const calendarReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.eventsLoaded:
			return {
				...state,
				events: [...action.payload]
			};
		case types.eventSetActive:
			return {
				...state,
				activeEvent: action.payload
			};
		case types.eventAddNew:
			return {
				...state,
				events: [...state.events, action.payload]
			};
		case types.eventUpdated:
			return {
				...state,
				events: state.events.map((e) =>
					e.id === action.payload.id ? action.payload : e
				)
			};
		case types.eventDeleted:
			return {
				...state,
				events: state.events.filter((e) => e.id !== state.activeEvent.id),
				activeEvent: null
			};
		case types.eventsCleaned:
			return {
				// events: [],
				// activeEvent: null
				...initialState
			};
		default:
			return state;
	}
};
