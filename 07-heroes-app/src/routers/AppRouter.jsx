import React, { useContext } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/authContext";

import { LoginScreen } from "../components/login/LoginScreen";
import { DashBoardsRouters } from "./DashBoardsRouters";
import { PrivateRoutes } from "./PrivateRoutes";
import { PublicRoutes } from "./PublicRoutes";

export const AppRouter = () => {
	const { user } = useContext(AuthContext);
	return (
		<BrowserRouter>
			<Routes>
				{/* {user.logged ? (
					<Route path='/*' element={<DashBoardsRouters />} />
				) : (
					<>
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/*' element={<Navigate to='/login' />} />
					</>
				)} */}

				<Route
					path='/login'
					element={
						<PublicRoutes>
							<LoginScreen />
						</PublicRoutes>
					}
				/>
				<Route
					path='/*'
					element={
						<PrivateRoutes>
							<DashBoardsRouters />
						</PrivateRoutes>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
};
