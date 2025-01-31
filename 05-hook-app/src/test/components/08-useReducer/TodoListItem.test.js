import React from "react";
import "@testing-library/jest-dom";
import { shallow } from "enzyme";
import { TodoListItem } from "../../../components/08-useReducer/TodoListItem";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en <TodoListItem", () => {
	const handleDelete = jest.fn();
	const handleToggle = jest.fn();
	const wrapper = shallow(
		<TodoListItem
			todo={demoTodos[0]}
			index={0}
			handleDelete={handleDelete}
			handleToggle={handleToggle}
		/>
	);
	test("Deberia mostrarse correctamente", () => {
		expect(wrapper).toMatchSnapshot();
	});

	test("Deberia llamar a la funcion handleDelete", () => {
		wrapper.find('button').simulate('click');
        expect(handleDelete).toHaveBeenCalledWith(demoTodos[0].id);
	});

	test("Deberia llamar a la funcion handleToggle", () => {
        wrapper.find('p').simulate('click');
        expect(handleToggle).toHaveBeenCalledWith(demoTodos[0].id);
    });

	test("Deberia mostrar el texto correctamente", () => {
        const p = wrapper.find('p');
        expect(p.text().trim()).toBe(`${0 + 1}. ${demoTodos[0].desc}`);
    });

    test('Deberia estar el parrafo con la clase complete si si el TODO.done = "true"', () => {
        const todo = demoTodos[0];
        todo.done = true;
        const wrapper = shallow(
            <TodoListItem
                todo={todo}
                index={0}
                handleDelete={handleDelete}
                handleToggle={handleToggle}
            />
        );
        // console.log(wrapper.html());
        // expect(wrapper.find('p').prop('className')).toEqual('complete')
        expect(wrapper.find('p').hasClass('complete')).toBe(true);
    })
    
});
