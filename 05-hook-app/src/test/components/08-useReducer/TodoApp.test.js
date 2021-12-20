/* eslint-disable */

import React from "react";
import "@testing-library/jest-dom";
import { shallow, mount } from "enzyme";
import { TodoApp } from "../../../components/08-useReducer/TodoApp";
import { demoTodos } from "../../fixtures/demoTodos";
import { act } from "@testing-library/react";

describe("Pruebas en <TodoApp />>", () => {
	Storage.prototype.setItem = jest.fn(() => {});
	let wrapper;
	const fillWrapper = () => {
		wrapper = shallow(<TodoApp />);
	};

	beforeEach(() => fillWrapper());

	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Debe agregar un TODO", () => {
		const wrapper = mount(<TodoApp />);

		act(() => {
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
			wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[1]);
		});
		// console.log(wrapper.find('h1').html());
		expect(wrapper.find("h1").text().trim()).toBe("TodoApp ( 2 )");
		expect(localStorage.setItem).toHaveBeenCalledTimes(2);
		// expect(localStorage.setItem).toHaveBeenCalledWith({});
	});

	test("Debe de eliminar un todo", () => {
		wrapper.find("TodoAdd").prop("handleAddTodo")(demoTodos[0]);
		wrapper.find("TodoList").prop("handleDelete")(demoTodos[0].id);
		expect(wrapper.find("h1").text().trim()).toBe("TodoApp ( 0 )");
	});
    
});
