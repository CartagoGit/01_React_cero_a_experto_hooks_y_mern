// import { render } from "@testing-library/react";

import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import PrimeraApp from "../PrimeraApp";

describe("Pruebas en la primera app de React", () => {
	/*test('Debe mostrar el mensaje "Hola soy Goku"', () => {
		const saludo = "Hola, soy Goku";
		// const wrapper = render(<PrimeraApp saludo={saludo}/>);
        const {getByText} = render(<PrimeraApp saludo={saludo}/>);

        // wrapper.getByText()
        expect (getByText(saludo)).toBeInTheDocument();
	});*/

	test("Deberia mostrar primerapp correctamente", () => {
		const saludo = "Hola, soy Goku";
		const wrapper = shallow(<PrimeraApp saludo={saludo} />);

		expect(wrapper).toMatchSnapshot();
	});

	test("debe enviar el subtitulo enviado por props", () => {
		const saludo = "Hola, soy Goku";
		const subtitulo = "Esto es un subtitulo";
		const wrapper = shallow(
			<PrimeraApp saludo={saludo} subtitulo={subtitulo} />
		);
		const textoParrafo = wrapper.find("p").text();
        // console.log(textoParrafo);
		expect(textoParrafo).toBe(subtitulo);
	});
});
