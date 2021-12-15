import { collection, getDocs } from "@firebase/firestore";
import { db } from "../firebase/firebase-config";

export const loadNotes = async (uid) => {
	const query = collection(db, `${uid}/journal/notes`);
	const notesSnap = await getDocs(query);
	const notes = [];

	notesSnap.forEach((snapChild) => {
		// console.log(snapChild.data());
		notes.push({
			id: snapChild.id,
			...snapChild.data()
		});
	});

	return notes;
};
