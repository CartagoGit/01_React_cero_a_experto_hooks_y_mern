import React from "react";

import { shallow } from "enzyme";
import { TodoAdd } from "../../../components/08-useReducer/TodoAdd";

describe("Pruebas en <TodoAdd />>", () => {
	const handleAddTodo = jest.fn();
	const handleInputChange = jest.fn();
	let wrapper;

	const fillWrapper = () => {
		wrapper = shallow(<TodoAdd handleAddTodo={handleAddTodo} />);
	};
	beforeEach(() => fillWrapper());

	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("NO deberia llamar a handleAddTodo ", () => {
		const formSubmit = wrapper.find("form").prop("onSubmit");
		formSubmit({ preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(0);
	});

	test("Debe llamar la funcion handleAddTodo ", () => {
		const value = "Una descripcion cualquiera";
		wrapper.find("input").simulate("change", {
			target: {
				value,
				name: "description"
			}
		});

		const formSubmit = wrapper.find("form").prop("onSubmit");

		formSubmit({ preventDefault() {} });
		expect(handleAddTodo).toHaveBeenCalledTimes(1);
		expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object)); //comprobamos que es llamado por un objecto
		expect(handleAddTodo).toHaveBeenCalledWith({
			id: expect.any(Number), //Comprobamos que el objecto tiene el valor del objeto que mandamos
			desc:value,
			done:false
		});

		expect(wrapper.find('input').prop('value')).toBe(''); //Despues del reset el input tiene que estar vacio
	});
});
