import { heroes } from "../data/heroes";

export const getHeroById = (id) => {
	const hero = heroes.find((hero) => hero.id === id);
	// if (!hero) {
	// 	return new Error(`${id} is not a valid id`);
	// }
	return hero;
};
