import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe("Pruebas en 02-template-string.js", () => {
	test('getSaludo debe retornar "hola nombre"', () => {
		const nombre = "Fernando";
        const saludo = getSaludo(nombre);
        expect(saludo).toBe("Hola "+nombre);
	});

    test('getSaludo debe retornar "Hola Carlos"', () => {
		const mensaje = "Hola Carlos";
        expect(getSaludo()).toBe(mensaje);
	});
});
