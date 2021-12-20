import Swal from "sweetalert2";
import { fetchWithToken } from "../helpers/fetch";
import { prepareEvents } from "../helpers/prepareEvents";
import { types } from "../types/types";

export const eventStartAddNew = (event) => {
	return async (dispatch, getState) => {
		const { uid, name } = getState().auth;
		console.log(event);
		try {
			const resp = await fetchWithToken("events", event, "POST");
			const body = await resp.json();
			if (body.ok) {
				event.id = body.event.id;
				event.user = { _id: uid, name };
				dispatch(eventAddNew(event));
			} else {
				Swal.fire("Error", body.msg, "error");
			}
		} catch (error) {
			Swal.fire(
				"Error",
				`Hubo un error al conectarse a la base de datos. Contacte con el administrador:\n ${error}`,
				"error"
			);
		}
	};
};

export const evenstStartLoading = () => {
	return async (dispatch) => {
		try {
			const resp = await fetchWithToken("events");
			const body = await resp.json();
			const events = prepareEvents(body.events);

			dispatch(eventsLoaded(events));
		} catch (error) {
			Swal.fire(
				"Error",
				`Hubo un error al conectarse a la base de datos. Contacte con el administrador:\n ${error}`,
				"error"
			);
		}
	};
};

export const eventSetActive = (event) => {
	return {
		type: types.eventSetActive,
		payload: event
	};
};

export const eventStartUpdate = (event) => {
	return async (dispatch) => {
		try {
			const resp = await fetchWithToken(`events/${event.id}`, event, "PUT");
			const body = await resp.json();
			if (body.ok) {
				dispatch(eventUpdated(event));
			} else {
				Swal.fire("Error", body.msg, "error");
			}
		} catch (error) {
			Swal.fire(
				"Error",
				`Hubo un error al conectarse a la base de datos. Contacte con el administrador:\n ${error}`,
				"error"
			);
		}
	};
};

export const eventStartDelete = () => {
	return async (dispatch, getState) => {
		try {
			const event = getState().calendar.activeEvent;
			const resp = await fetchWithToken(`events/${event.id}`, {}, "DELETE");
			const body = await resp.json();
			if (body.ok) {
				dispatch(eventDeleted());
			} else {
				Swal.fire("Error", body.msg, "error");
			}
		} catch (error) {
			Swal.fire(
				"Error",
				`Hubo un error al conectarse a la base de datos. Contacte con el administrador:\n ${error}`,
				"error"
			);
		}
	};
};

export const eventsCleaned = () => {
	return {
		type: types.eventsCleaned
	}
}

const eventDeleted = (event) => {
	return {
		type: types.eventDeleted
	};
};

const eventsLoaded = (events) => {
	return { type: types.eventsLoaded, payload: events };
};

const eventAddNew = (event) => {
	return {
		type: types.eventAddNew,
		payload: event
	};
};

const eventUpdated = (event) => {
	return {
		type: types.eventUpdated,
		payload: event
	};
};
