import {
	getAuth,
	signInWithPopup,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	updateProfile
} from "firebase/auth";
import Swal from "sweetalert2";
import { firebaseApp, googleProvider } from "../firebase/firebase-config";
import { types } from "../types/types";
import { finishLoading, startLoading } from "./ui";

export const startLoginEmailPassword = (email, password) => {
	return (dispatch) => {
		dispatch(startLoading());
		const auth = getAuth(firebaseApp);
		signInWithEmailAndPassword(auth, email, password)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((error) => {
				Swal.fire("Error ", error.code, "error");
				dispatch(finishLoading());
			});
	};
};

export const startRegisterNameEmailPassword = (
	name,
	email,
	password,
	password2
) => {
	return (dispatch) => {
		if (password !== password2) {
			Swal.fire("Error ", "Password must match each other", "error");
			return;
		}
		dispatch(startLoading());
		const auth = getAuth(firebaseApp);
		createUserWithEmailAndPassword(auth, email, password)
			.then(async ({ user }) => {
				await updateProfile(user, { displayName: name });
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((error) => {
				Swal.fire("Error ", error.code, "error");
				dispatch(finishLoading());
			});
	};
};

export const startGoogleLogin = () => {
	return (dispatch) => {
		dispatch(startLoading());
		const auth = getAuth(firebaseApp);
		signInWithPopup(auth, googleProvider)
			.then(({ user }) => {
				dispatch(login(user.uid, user.displayName));
				dispatch(finishLoading());
			})
			.catch((error) => {
				Swal.fire("Error ", error.code, "error");
				dispatch(finishLoading());
			});
	};
};

export const login = (uid, displayName) => ({
	type: types.login,
	payload: {
		uid,
		displayName
	}
});

export const startLogout = () => {
	return async (dispatch) => {
		const auth = getAuth(firebaseApp);
		await auth.signOut();
		dispatch(logout());
	};
};

export const logout = () => ({
	type: types.logout
});
