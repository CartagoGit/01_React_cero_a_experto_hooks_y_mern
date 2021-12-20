import { getHeroeByIdAsync } from "../../base/09-promesas";
import heroes from "../../data/heroes";

describe("Prueba con promesas", () => {
	test("Debe retornar un error async", (done) => {
		const id = 4;
		getHeroeByIdAsync(id).then((heroe) => {
			expect(heroe).toBe(heroes[3]);
			done();
		});
	});

    test ('Debe obtener un error si el heroe por id no existe',(done)=>{
        const id = 10;
        getHeroeByIdAsync(id).catch((error)=>{
            expect(error).toBe('No se pudo encontrar el héroe');
            done();
        });
    });
});
