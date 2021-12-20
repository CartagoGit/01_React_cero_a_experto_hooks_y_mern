import { getHeroeById } from './bases/08-import';

// const promesa = new Promise ((resolve, reject) =>{
//     setTimeout(() => {
//         // console.log('dos segundos despues');

//         // resolve();

//         const heroe = getHeroeById(30);
//         if(heroe)resolve(heroe);
//         else reject('No se pudo encontrar el heroe')
//     }, 1000);
// });

// promesa.then((recibidoDelResolve)=>{
//     console.log(recibidoDelResolve);
// }).catch( err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('dos segundos despues');

            // resolve();

            const heroe = getHeroeById(id);
            if (heroe) resolve(heroe);
            else reject('No se pudo encontrar el heroe')
        }, 1000);
    });
}

getHeroeByIdAsync(4)
    // .then((recibidoDeLaPromesa) => console.log('Heroe: ', recibidoDeLaPromesa))
    .then(console.log)
    // .catch((err) => console.warn(err));
    .catch(console.warn);