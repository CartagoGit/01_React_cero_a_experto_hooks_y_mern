import { heroes } from "../data/heroes";

export const getHeroesByName = (name) => {
	// if(name.length <1) return;
	name = name.toLowerCase();
	const heroesFiltered = heroes.filter((hero) =>
		hero.superhero.toLowerCase().includes(name)
	);
	return heroesFiltered;
};
