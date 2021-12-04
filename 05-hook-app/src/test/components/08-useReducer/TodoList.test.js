import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoList } from "../../../components/08-useReducer/TodoList";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoList />>", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	let wrapper;

	const fillWrapper = () => {
		wrapper = shallow(
			<TodoList
				todos={demoTodos}
				handleDelete={handleDelete}
				handleToggle={handleToggle}
			/>
		);
	};
	beforeEach(() => fillWrapper());

	test("Deberia mosrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

    test('Deberia tener el numero de list items ', () => {
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
        expect(wrapper.find('TodoListItem').at(0).prop('handleToggle')).toEqual(expect.any(Function));
    });
    
});
