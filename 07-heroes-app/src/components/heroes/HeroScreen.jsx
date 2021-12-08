import React, { useMemo } from "react";
import { useParams, Navigate, useNavigate } from "react-router";
import { heroesImages } from "../../helpers/getImages";
import { getHeroById } from "../../selectors/getHeroById";


export const HeroScreen = () => {
	const { id: idParam } = useParams(); //Pasados por el router
	const hero = useMemo(() => {
		return getHeroById(idParam);
	}, [idParam]);
	const navigate = useNavigate();
	if (!hero) return <Navigate to='/error/idhero' />;

	const handleReturn = () => {
		navigate(-1);
	};

	// const imagePath = `/assets/img/heroes/${idParam}.jpg`;
	const { id, superhero, publisher, alter_ego, first_appearance, characters } =
		hero;
	// console.log(heroImages('./marvel-spider.jpg').default);
	return (
		<div className='card animate__animated animate__fadeIn animate__slow'>
			<div className='row justify-content-center mt-3 mb-3'>
				<div className='col-4'>
					{/* DESDE PUBLIC /ASSETS */}
					{/* <img src={imagePath} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft animate__faster' /> */}
					{/* MANEJANDO LA IMAGEN CON EL REQUIRE DESDE REACT */}
					<img
						src={heroesImages(`./${idParam}.jpg`).default}
						alt={superhero}
						className='img-thumbnail animate__animated animate__fadeInLeft animate__faster'
					/>
					<small className='d-flex text-center justify-content-center'>
						id: {id}
					</small>
				</div>
				<div className='col-7 ps-3 animate__animated animate__fadeIn animate_slowest'>
					<div className='h-100 d-flex flex-column'>
						<h3>{superhero}</h3>
						<ul className='list-group list-group-flush'>
							<li className='list-group-item'>
								<b>Alter ego: </b>
								{alter_ego}
							</li>
							<li className='list-group-item'>
								<b>Publisher: </b>
								{publisher}
							</li>
							<li className='list-group-item'>
								<b>First appearance: </b>
								{first_appearance}
							</li>
							{alter_ego !== characters && (
								<li className='list-group-item'>
									<b>Other Characters: </b>
									{characters}
								</li>
							)}
						</ul>
						<div className='mt-auto  justify-content-end d-flex'>
							<button
								className='btn btn-secondary animate__animated animate__bounce animate__faster'
								onClick={handleReturn}
							>
								Regresar
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
