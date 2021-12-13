import { getAuth } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { login } from "../actions/auth";
import { JournalScreen } from "../components/journal/JournalScreen";
import { firebaseApp } from "../firebase/firebase-config";
import { AuthRouter } from "./AuthRouter";

export const AppRouter = () => {
	const dispatch = useDispatch();

	const [checking, setChecking] = useState(true);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	useEffect(() => {
		const auth = getAuth(firebaseApp);
		auth.onAuthStateChanged((user) => {
			if (user?.uid) {
				dispatch(login(user.uid, user.displayName));
				setIsLoggedIn(true);
			} else setIsLoggedIn(false);
			setChecking(false);
		});
	}, [dispatch, setChecking, setIsLoggedIn]);

	if (checking) {
		return <h1>Wait a moment...</h1>;
	}

	return (
		<BrowserRouter>
			<Routes>
				{isLoggedIn ? (
					<>
						<Route path='/' element={<JournalScreen />} />
						<Route path='/*' element={<Navigate to='/' />} />
					</>
				) : (
					<>
						<Route path='/auth/*' element={<AuthRouter />} />
						<Route path='/*' element={<Navigate to='/auth/login' />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
};
