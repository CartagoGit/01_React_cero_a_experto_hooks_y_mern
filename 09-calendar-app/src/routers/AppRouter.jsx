import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginScreen } from "../components/auth/LoginScreen";
import { CalendarScreen } from "../components/calendar/CalendarScreen";
import { authStartChecking } from "../actions/auth";

export const AppRouter = () => {
	const dispatch = useDispatch();
	const { checking, uid } = useSelector((state) => state.auth);
	useEffect(() => {
		dispatch(authStartChecking());
	}, [dispatch]);

	if (checking) {
		return <h5>Cargando...</h5>;
	}
	return (
		<BrowserRouter>
			<Routes>
				{!!uid ? (
					<>
						<Route path='/' element={<CalendarScreen />} />
						<Route path='/*' element={<Navigate to='/' />} />
					</>
				) : (
					<>
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/*' element={<Navigate to='/login' />} />
					</>
				)}
			</Routes>
		</BrowserRouter>
	);
};
