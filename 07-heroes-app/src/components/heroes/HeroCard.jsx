import React from "react";
import { Link } from "react-router-dom";
import { heroesImages } from "../../helpers/getImages";

export const HeroCard = ({
	id,
	superhero,
	// publisher,
	alter_ego,
	first_appearance,
	characters
}) => {
	// const imagesPath = `/assets/img/heroes/${id}.jpg`; Si usar imagenes manejadas por React
	const imagesPath = heroesImages(`./${id}.jpg`).default;
	return (
		<div className='col p-2 animate__fadeIn animate__slowest'>
			<div className='card h-100 p-2'>
				<div className='row g-0 text-center'>
					<h5>{superhero}</h5>
				</div>
				<div className='row g-0 '>
					<img src={imagesPath} className='card-img' alt={superhero} />
				</div>

				<p className='text-muted'>
					{alter_ego !== characters ? characters : alter_ego}
				</p> 
				<div className='text-muted'>
					<div className='row g-0 row'>First appearance:</div>
					<p className='row g-0 row'>{first_appearance}</p>
				</div>
                <Link className='mt-auto' to={`/hero/${id}`}>Mas...</Link>
			</div>
		</div>
	);
};
