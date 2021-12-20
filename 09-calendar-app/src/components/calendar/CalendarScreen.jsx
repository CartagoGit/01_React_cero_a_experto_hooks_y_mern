import "react-big-calendar/lib/css/react-big-calendar.css";

import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Calendar, momentLocalizer } from "react-big-calendar";

import { Navbar } from "../ui/Navbar";
import { messages } from "../../helpers/calendar-messages-es";
import { CalendarEvents } from "./CalendarEvents";
import { CalendarModal } from "./CalendarModal";
import { uiOpenModal } from "../../actions/ui";

// Setup the localizer by providing the moment (or globalize) Object
// to the correct localizer.
import moment from "moment";
import "moment/locale/es";
import { evenstStartLoading, eventSetActive } from "../../actions/events";
import { AddNewFab } from "../ui/AddNewFab";
import { DeleteEventFab } from "../ui/DeleteEventFab";
moment.locale("es");
const localizer = momentLocalizer(moment); // or globalizeLocalizer

// const myEventsList = [
// 	// {
// 	// 	title: "Cumpleaños del Jefe",
// 	// 	start: moment().toDate(),
// 	// 	end: moment().add(2, "hours").toDate(),
// 	// 	bgcolor: "#fafafa", // Se pueden añadir objetos
// 	// 	notes: "Comprar el pastel",
// 	// 	user: {
// 	// 		_id: "123",
// 	// 		name: "Mario"
// 	// 	}
// 	// }
// ];
export const CalendarScreen = () => {
	const [lastView, setLastView] = useState(
		localStorage.getItem("lastView") || "month"
	);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(evenstStartLoading());
	}, [dispatch]);

	const { events, activeEvent } = useSelector((state) => state.calendar);
	const { uid } = useSelector((state) => state.auth);

	const onDoubleClick = (e) => {
		dispatch(uiOpenModal());
	};

	const onSelectEvent = (e) => {
		dispatch(eventSetActive(e));
		// dispatch(uiOpenModal());
	};
	const onSelectSlot = (e) => {
		dispatch(eventSetActive(null));
	};

	const onViewChange = (e) => {
		setLastView(e);
		localStorage.setItem("lastView", e);
	};

	const eventStyleGetter = (event, start, end, isSelected) => {
		//Devuelve el estilo para el evento

		const style = {
			backgroundColor: uid === event.user._id ? "#367cf7" : "#4f4555",
			border: `solid blue ${uid === event.user._id ? "1px" : "0px"} `,
			borderRadius: "3px",
			opacity: 0.8,
			display: "block",
			color: "white"
		};
		return { style };
	};

	return (
		<div className='calendar-screen'>
			<Navbar />
			<Calendar
				localizer={localizer}
				events={events}
				startAccessor='start'
				endAccessor='end'
				messages={messages}
				eventPropGetter={eventStyleGetter} //Estilo para los recuadros del evento
				onSelectEvent={onSelectEvent}
				onSelectSlot={onSelectSlot}
				selectable={true}
				onDoubleClickEvent={onDoubleClick} // Para Dobles clicks
				onView={onViewChange}
				view={lastView}
				components={{
					event: CalendarEvents
				}}
			/>
			{activeEvent && <DeleteEventFab />}
			<AddNewFab />
			<CalendarModal />
		</div>
	);
};
