import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import moment from "moment";
import Modal from "react-modal";
import DateTimePicker from "react-datetime-picker";
import { v4 } from "uuid";

import "../../styles/modal.css";
import Swal from "sweetalert2";
import { uiCloseModal } from "../../actions/ui";
import {
	eventAddNew,
	eventSetActive,
	eventUpdated
} from "../../actions/events";

const customStyles = {
	content: {
		top: "50%",
		left: "50%",
		right: "auto",
		bottom: "auto",
		marginRight: "-50%",
		transform: "translate(-50%, -50%)"
	}
};

Modal.setAppElement("#root");

const initialStart = moment()
	.minutes(0)
	.seconds(0)
	.milliseconds(0)
	.add("1", "hours");
const initialEnd = moment()
	.minutes(0)
	.seconds(0)
	.milliseconds(0)
	.add("2", "hours");

const initialFormState = {
	title: "",
	notes: "",
	start: initialStart.toDate(),
	end: initialEnd.toDate()
};

export const CalendarModal = () => {
	const [dateStart, setDateStart] = useState(initialStart.toDate());
	const [dateEnd, setDateEnd] = useState(initialEnd.toDate());

	const dispatch = useDispatch();
	const { activeEvent } = useSelector((state) => state.calendar);
	const { modalOpen } = useSelector((state) => state.ui);

	const closeModal = () => {
		setFormValues(initialFormState);
		dispatch(uiCloseModal());
	};

	useEffect(() => {
		!modalOpen && dispatch(eventSetActive(null));
	}, [modalOpen, dispatch]);

	useEffect(() => {
		setFormValues(activeEvent ? activeEvent : initialFormState);
	}, [activeEvent]);

	const [formValues, setFormValues] = useState(initialFormState);

	const { title, notes, start, end } = formValues;

	const handleInputChange = ({ target }) => {
		setFormValues({
			...formValues,
			[target.name]: target.value
		});
	};

	const handleStartDateChange = (e) => {
		setDateStart(e);
		setFormValues({
			...formValues,
			start: e
		});
	};

	const handleEndDateChange = (e) => {
		setDateEnd(e);
		setFormValues({
			...formValues,
			end: e
		});
	};

	const handleSubmitForm = (e) => {
		e.preventDefault();

		// console.log(moment.unix(momentStart), moment.unix(momentEnd));
		// if (momentStart.isAfter(momentEnd)) {
		if (!isDateOK()) {
			Swal.fire(
				"Error",
				"La fecha inicial no puede ser mayor a la fecha de inicio",
				"error"
			);
			return;
		}

		if (!isTitleOK()) {
			return Swal.fire(
				"Error",
				"El título tiene que tener más de una letra",
				"error"
			);
		}
		// console.log( v4());
		dispatch(
			activeEvent
				? eventUpdated({
						...formValues,
						user: {
							_id: "234",
							name: "Marta"
						}
				  })
				: eventAddNew({
						...formValues,
						id: v4(),
						user: {
							_id: "123",
							name: "Pepe"
						}
				  })
		);
		Swal.fire(
			"Evento guardado",
			"El evento se ha guardado correctamente",
			"success"
		);

		closeModal();
	};

	const isDateOK = () => {
		const momentStart = moment(start);
		const momentEnd = moment(end);
		if (moment.unix(momentStart) <= moment.unix(momentEnd)) return true;
		else return false;
	};

	const isTitleOK = () => {
		return title.trim().length < 2 ? false : true;
	};

	return (
		<Modal
			isOpen={modalOpen}
			// onAfterOpen={afterOpenModal}
			onRequestClose={closeModal}
			style={customStyles}
			closeTimeoutMS={200}
			// contentLabel='Example Modal'
			className='modal'
			overlayClassName='modal-fondo'
		>
			<h1> {activeEvent ? `${activeEvent.title}` : "Nuevo evento"} </h1>
			<hr />
			<form className='container' noValidate onSubmit={handleSubmitForm}>
				<div className='form-group'>
					<label>Fecha y hora inicial</label>
					<DateTimePicker
						onChange={handleStartDateChange}
						value={dateStart}
						className={`form-control ${isDateOK() ? "is-valid" : "is-invalid"}`}
						minDate={initialStart.toDate()}
						format='dd/MM/y - H:mm'
						name='fechaInicial'
					/>
				</div>

				<div className='form-group'>
					<label>Fecha y hora final</label>
					<DateTimePicker
						onChange={handleEndDateChange}
						value={dateEnd}
						className={`form-control ${isDateOK() ? "is-valid" : "is-invalid"}`}
						minDate={initialStart.toDate()}
						format='dd/MM/y - H:mm'
						name='fechaFinal'
					/>
				</div>

				<hr />
				<div className='form-group'>
					<label>Título y notas</label>
					<input
						type='text'
						className={`form-control ${
							isTitleOK() ? "is-valid" : "is-invalid"
						}`}
						placeholder='Título del evento'
						name='title'
						autoComplete='off'
						value={title}
						onChange={handleInputChange}
					/>
					<small id='emailHelp' className='form-text text-muted'>
						Una descripción corta
					</small>
				</div>

				<div className='form-group'>
					<textarea
						type='text'
						className='form-control'
						placeholder='Notas'
						rows='5'
						name='notes'
						value={notes}
						onChange={handleInputChange}
					></textarea>
					<small id='emailHelp' className='form-text text-muted'>
						Información adicional
					</small>
				</div>

				<button type='submit' className='btn btn-outline-primary btn-block'>
					<i className='far fa-save'></i>
					<span> Guardar</span>
				</button>
			</form>
		</Modal>
	);
};
