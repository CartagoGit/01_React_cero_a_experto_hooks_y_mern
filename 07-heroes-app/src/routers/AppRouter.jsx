import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from "../components/login/LoginScreen";

import { DashBoardsRouters } from "./DashBoardsRouters";

export const AppRouter = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<LoginScreen />} />
				<Route path='/*' element={<DashBoardsRouters />} />
			</Routes>
		</BrowserRouter>
	);
};
