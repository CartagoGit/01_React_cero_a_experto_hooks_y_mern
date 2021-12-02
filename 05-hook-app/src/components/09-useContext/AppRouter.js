import React from "react";
import {
	BrowserRouter as Router,
	Navigate,
	Routes,
	Route
} from "react-router-dom";
import { AboutScreen } from "./AboutScreen";
import { HomeScreen } from "./HomeScreen";
import { LoginScreen } from "./LoginScreen";
import { NavBar } from "./NavBar";

export const AppRouter = () => {
	return (
		<Router>
			<>
				<NavBar />
				<div className='container'>
					<Routes>
						<Route path='/home' element={<HomeScreen />} />
						<Route path='/login' element={<LoginScreen />} />
						<Route path='/about' element={<AboutScreen />} />
						<Route path='*' element={<Navigate to='/home' />} />
					</Routes>
				</div>
			</>
		</Router>
	);
};
