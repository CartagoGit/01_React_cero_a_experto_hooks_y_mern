import React, { useMemo } from "react";
import { useNavigate, useLocation } from "react-router";
import queryString from "query-string";

import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../heroes/HeroCard";

export const SearchScreen = () => {
	const navigate = useNavigate();
	const location = useLocation();

	const { q = "" } = queryString.parse(location.search);

	const [values, handleInputChange] = useForm({ searchText: "" });
	const { searchText } = values;

	const heroesFiltered = useMemo(()=>{
		return getHeroesByName(q);
	},[q]) 
	// console.log(heroesFiltered);

	const handleSearch = (e) => {
		e.preventDefault();
		navigate(`?q=${searchText}`);
		// reset();
	};
	return (
		<div className='animate__animated animate__fadeIn'>
			<h1>Search Heroes</h1>
			<hr />
			<div className='row '>
				<div className='col-4 col-lg-2'>
					<h4>Search...</h4>
					<hr />
					<form
						className='d-grid gap-2 animate__animated animate__slideInLeft'
						onSubmit={handleSearch}
					>
						<input
							type='text'
							placeholder='Search heroes...'
							className='form-control'
							name='searchText'
							autoComplete='off'
							value={searchText}
							onChange={handleInputChange}
						></input>
						<button type='submit' className='btn btn-secondary '>
							Search
						</button>
					</form>
				</div>
				<div className='mb-4 col-8  col-lg-10 animate__fadeIn animate__slowest'>
					<h4>Results</h4>
					<hr />
					{q === "" ? (
						<div className='alert alert-info animate__fadeIn animate__slowest'>
							Search some Hero
						</div>
					) : heroesFiltered.length === 0 ? (
						<div className='alert alert-danger animate__fadeIn animate__slowest'>
							There are not any result with: {q}
						</div>
					) : (
						<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-xl-5 animate__fadeIn animate__slow'>
							{heroesFiltered.map((hero) => (
								<HeroCard key={hero.id} {...hero} />
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
