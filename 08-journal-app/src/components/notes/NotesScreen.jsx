import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { activeNote, startDeleting } from "../../actions/notes";
import { useForm } from "../../hooks/useForm";
import { NotesAppBar } from "./NotesAppBar";


export const NotesScreen = () => {
	const dispatch = useDispatch();

	const { active: note } = useSelector((state) => state.notes);
	const [formValues, handleInputChange, reset] = useForm(note);
	const { body, title } = formValues;
	const activeId = useRef(note.id);
	const activeUrl = useRef(note.url);

	useEffect(() => {
		if (note.id !== activeId.current) {
			activeId.current = note.id;
			reset(note);
		}
		if (note.url !== activeUrl.current) {
			activeUrl.current = note.url;
			reset(note);
		}
	}, [note, reset]);

	useEffect(() => {
		// console.log(formValues, activeId.current);
		dispatch(activeNote(activeId.current, formValues));
	}, [formValues, dispatch]);

	const handleDeleteNote = () => {
		dispatch(startDeleting(note.id));
	};

	return (
		<div className='notes__main-content animate__animated animate__fadeInRight animate__faster'>
			<NotesAppBar />
			<div className='notes__content'>
				<input
					type='text'
					placeholder='Some awesome title'
					className='notes__title-input'
					autoComplete='off'
					name='title'
					value={title}
					onChange={handleInputChange}
				/>
				<textarea
					placeholder='What happened today'
					className='notes__textarea'
					name='body'
					value={body}
					onChange={handleInputChange}
				/>
				{note.url && (
					<div className='notes__image'>
						<img alt='uploaded' src={note.url} onChange={handleInputChange} />
					</div>
				)}
			</div>
			<button className='btn btn-danger' onClick={handleDeleteNote}>
				Delete
			</button>
		</div>
	);
};
