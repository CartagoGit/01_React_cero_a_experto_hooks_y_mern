import React from "react";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "../components/ui/Navbar";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { HeroScreen } from "../components/heroes/HeroScreen";
import { ErrorScreen } from "../components/error/ErrorScreen";

export const DashBoardsRouters = () => {
	return (
		<div >
			<Navbar />
			<div className='container'>
				<Routes>
					<Route path='marvel' element={<MarvelScreen />} />
					<Route path='dc' element={<DcScreen />} />
					<Route path='search' element={<SearchScreen />} />
					<Route path='/hero/:id' element={<HeroScreen />} />
					<Route path='/error' element={<ErrorScreen />} />
					<Route path='/error/idhero' element={<ErrorScreen message={"There are not heroes with that ID"}/>} />
					<Route path='/' element={<MarvelScreen />} />
					<Route path='/*' element={<ErrorScreen />} />
				</Routes>
			</div>
		</div>
	);
};
