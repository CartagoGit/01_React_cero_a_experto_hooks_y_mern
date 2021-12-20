
// Nos saltamos varias clases en la practica vamos a por 


import {heroes} from "../data/heroes";

// console.log(heroes);

export const getHeroeById = (id) =>{
    return heroes.find((element) => element.id === id);
};

// console.log (getHeroeById(2));

export const getHeroesByOwner = (owner) => heroes.filter((element) => element.owner === owner);


// console.log (getHeroesByOwner('Marvel'));