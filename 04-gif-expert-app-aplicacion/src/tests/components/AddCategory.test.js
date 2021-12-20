import React from "react";
import "@testing-library/jest-dom";

import { shallow } from "enzyme";
import { AddCategory } from "../../components/AddCategory";

describe("Pruebas en el archivo AddCategory", () => {
	const setCategories = jest.fn();
	let wrapper;

	beforeEach(() => {
		jest.clearAllMocks();
		wrapper = shallow(<AddCategory setCategories={setCategories} />);
	});

	test("Debe mostrarse correctamente", () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		expect(wrapper).toMatchSnapshot();
	});

	test("Debe cambiar la caja de texto", () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		let input = wrapper.find("input").at(0);
		const value = "Hola Mundo";
		input.simulate("change", { target: { value } });
		input = wrapper.find("input").at(0);
		const inputValue = input.props().value;
		expect(inputValue.trim()).toBe(value);
	});

	test("No debe de llamar o postear la informacion con submit ", () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		wrapper.find("form").simulate("submit", { preventDefault() {} });
		expect(setCategories).not.toHaveBeenCalled();
	});

	test("Debe de llamar a setCategories y limpar la caja de texto", () => {
		console.log("------> " + expect.getState().currentTestName + " <------");

		const value = "Un texto";

		//1.
		let input = wrapper.find("input").at(0);
		input.simulate("change", { target: { value } });

		//2.
		const form = wrapper.find("form").at(0);
		form.simulate("submit", { preventDefault() {} });

		//3.
		expect(setCategories).toHaveBeenCalled();
		
		//4.
		input = wrapper.find("input").at(0);
		expect(input.props().value).toBe('');

		expect(setCategories).toHaveBeenCalledWith(expect.any(Function));
	});
});
