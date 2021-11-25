import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas con CounterAPP", () => {
    let wrap;
    beforeEach(()=>{
        wrap = shallow(<CounterApp />);
        // console.log(wrap.text());
    });
	test("Deberia mostrar counterapp correctamente con un snapshoot", () => {
		// const valor = 123;
		// const wrapper = shallow(<CounterApp />);

		expect(wrap).toMatchSnapshot();
	});

	test("Deberia mostrar el valor por defecto 100", () => {
		const valor = 100;
		const wrap = shallow(<CounterApp value={valor} />);
		wrap.find("h2").forEach((node) => {
            // console.log(node.text());
			expect(parseInt(node.text().trim())).toBe(valor);
		});
	});

    
    test('Debe incrementar el contador con el boton +1', () => {
        wrap.find('button').at(0).simulate('click');
        expect(parseInt(wrap.find("h2").at(1).text().trim())).toBe(1);

    });

    test('Debe decrementar el contador con el boton -1', () => {
        wrap.find('button').at(2).simulate('click');
        expect(parseInt(wrap.find("h2").at(1).text().trim())).toBe(-1);

    });

    test('Debe comprobar que el boton reset coloca el valor por defecto', () => {
        const valor = 100;
        const wrap = shallow(<CounterApp value={valor} />);
        wrap.find('button').at(0).simulate('click');
        
        wrap.find('button').at(0).simulate('click');
        wrap.find('button').at(0).simulate('click');
        wrap.find('button').at(1).simulate('click');

        const counterNum = parseInt(wrap.find("h2").at(1).text().trim());

        expect (counterNum).toBe(valor)

    })
    
    
});
