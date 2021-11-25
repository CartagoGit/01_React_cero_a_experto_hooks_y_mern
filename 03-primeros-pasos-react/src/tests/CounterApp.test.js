import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";

import CounterApp from "../CounterApp";

describe("Pruebas con CounterAPP", () => {
	test("Deberia mostrar counterapp correctamente con un snapshoot", () => {
		// const valor = 123;
		const wrapper = shallow(<CounterApp />);

		expect(wrapper).toMatchSnapshot();
	});

	test("Deberia mostrar el valor por defecto 100", () => {
		const valor = 100;
		const wrapper = shallow(<CounterApp value={valor} />);
		wrapper.find("h2").forEach((node) => {
            console.log(node.text());
			expect(parseInt(node.text().trim())).toBe(valor);
		});
	});
});
