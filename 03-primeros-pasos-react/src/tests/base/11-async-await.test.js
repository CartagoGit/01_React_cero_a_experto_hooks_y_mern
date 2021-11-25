import { getImagen } from "../../base/11-async-await";

describe ('Pruebas con llamadas async y await y fetch', ()=> {
    test('El fetch debe retornar el url de la imagen', async()=>{
        const url = await getImagen();

        console.log(url);
        // expect (typeof url).toBe('string');
        expect (url.includes('https://')).toBe(true);
    });
});