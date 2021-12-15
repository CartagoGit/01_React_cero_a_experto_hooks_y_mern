import { db } from "../firebase/firebase-config";
import {
	collection,
	doc,
	addDoc,
	updateDoc,
	deleteDoc
} from "firebase/firestore";
import { types } from "../types/types";
import { loadNotes } from "../helpers/loadNotes";
import Swal from "sweetalert2";
import { fileUpload } from "../helpers/fileUpload";
// https://api.cloudinary.com/v1_1/cartago/:action
// curso-react-journal

export const startNewNote = () => {
	return (dispatch) => {
		const newNote = { title: "", body: "", date: new Date().getTime() };
		dispatch(activeNote(null, newNote));
	};
};

export const activeNote = (id, note) => {
	return { type: types.notesActive, payload: { id, ...note } };
};

export const startLoadingNotes = (uid) => {
	return async (dispatch) => {
		const notes = await loadNotes(uid);
		dispatch(setNotes(notes));
	};
};

export const setNotes = (notes) => {
	return {
		type: types.notesLoad,
		payload: notes
	};
};

export const startSaveNote = (note) => {
	return async (dispatch, getState) => {
		try {
			note.id
				? await dispatch(updateNote(note))
				: await dispatch(saveNewNote(note));

			Swal.fire("Saved", note.title, "success");
		} catch (e) {
			Swal.fire("Failed", `Something went wrong: ${e}`, "error");
		}
	};
};

export const addNewNote = (note) => {
	return {
		type: types.notesAddNew,
		payload: note
	};
};

export const saveNewNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		const noteToFireStore = { ...note };
		delete noteToFireStore.id;
		const docRef = await addDoc(
			collection(db, `${uid}/journal/notes`),
			noteToFireStore
		);
		dispatch(refreshNote(docRef.id, note));
		note.id = docRef.id;
		dispatch(addNewNote(note));
	};
};

export const updateNote = (note) => {
	return async (dispatch, getState) => {
		const { uid } = getState().auth;

		if (!note.url) delete note.url;

		const noteToFireStore = { ...note };
		delete noteToFireStore.id;

		const docRef = doc(db, `${uid}/journal/notes/${note.id}`);

		await updateDoc(docRef, noteToFireStore);

		dispatch(refreshNote(note.id, note));
	};
};

export const refreshNote = (id, note) => ({
	type: types.notesUpdated,
	payload: {
		id,
		note: {
			id,
			...note
		}
	}
});

export const startUploading = (file) => {
	return async (dispatch, getState) => {
		const { active: activedNote } = getState().notes;
		Swal.fire({
			title: "Uploading...",
			text: "Please, wait a moment.",
			allowOutsideClick: false,
			allowEscapeKey: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			}
		});
		const fileUrl = await fileUpload(file);
		activedNote.url = fileUrl;
		dispatch(activeNote(activedNote.id, activedNote));

		Swal.close();
	};
};

export const startDeleting = (id) => {
	return async (dispatch, getState) => {
		Swal.fire({
			title: "Deleting...",
			text: "Please, wait a moment.",
			allowOutsideClick: false,
			allowEscapeKey: false,
			showConfirmButton: false,
			willOpen: () => {
				Swal.showLoading();
			}
		});
		try {
			const { uid } = getState().auth;
			const docRef = doc(db, `${uid}/journal/notes/${id}`);
			await deleteDoc(docRef);
			dispatch(deleteNote(id));
			Swal.fire("Deleted", "Note has removed correctly", "success");
		} catch (e) {
			Swal.fire("Failed", `Something went wrong: ${e}`, "error");
		}
	};
};

export const deleteNote = (id) => ({
	type: types.notesDelete,
	payload: id
});

export const notesLogout = () => {
	return { type: types.notesLogout };
};
