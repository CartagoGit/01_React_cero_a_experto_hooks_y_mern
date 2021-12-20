import React, { useMemo } from "react";
import PropTypes from "prop-types";

import { HeroCard } from "./HeroCard";

import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroesList = ({ publisher }) => {
	const heroes = useMemo(() => {
		return getHeroesByPublisher(publisher);
	}, [publisher]);
	return (
		<>
			<h1 className='text-center'>Heroes List</h1>
			<h2>{publisher}</h2>
			<hr />
			<div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 mb-4 animate__animated animate__fadeIn'>
				{heroes.map((hero) => (
					<HeroCard key={hero.id} {...hero}>
						{hero.superhero}
					</HeroCard>
				))}
			</div>
		</>
	);
};

HeroesList.prototypes = { publisher: PropTypes.object.isRequired };
