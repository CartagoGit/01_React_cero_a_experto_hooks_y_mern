import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp'
import heroes from '../../data/heroes';

describe ('pruebas en funciones de Heroes', ()=>{
    test('debe retornar un heroe por id', () => {
        const id = 1;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        console.log(heroe);

        expect (heroe).toEqual(heroeData);
    });
    test('debe retornar undefined si el heroe no existe', () => {
        const id = 10;
        const heroe = getHeroeById(id);

        const heroeData = heroes.find(h => h.id === id);
        console.log(heroe);

        expect (heroe).toBe(undefined);
    });

    test('debe retornar los heroes de creador/marca', () => {
        const owner= "DC";
        const heroe = getHeroesByOwner(owner);

        const heroeData = heroes.filter(h => h.owner === owner);
        console.log(heroe);

        expect (heroe).toEqual(heroeData);
    });
    test('debe regresar una cantidad de heroes igual al numero total de heroes', ()=>{
        const owner = 'Marvel';
        const heroe = getHeroesByOwner(owner);
        const numHeroes = heroe.length;
        const heroeData = heroes.filter(h=> h.owner === owner  );
        const numData = heroeData.length;
        console.log (numHeroes, numData);

        expect(numHeroes).toBe(numData);
    });
    
});