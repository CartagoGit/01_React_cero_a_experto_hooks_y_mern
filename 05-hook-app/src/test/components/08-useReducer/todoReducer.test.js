import "@testing-library/jest-dom";
import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe("Pruebas en todoReducer", () => {
	test("Deberia retornar el estado por defecto", () => {
		const state = todoReducer(demoTodos, {});
		expect(state).toEqual(demoTodos);
	});

	test("Deberia agregar un TODO", () => {
		const newTodo = {
			id: new Date().getTime() + 3,
			desc: "Tirar los monsters a la basura",
			done: false
		};

		const action = {
			type: "add",
			payload: newTodo
		};
		const state = todoReducer(demoTodos, action);
		expect(state.length).toBe(3);
		expect(state).toEqual([...demoTodos, newTodo]);
	});

	test("Deberia eliminar un TODO ", () => {
		const newTodo = {
			id: new Date().getTime(),
			desc: "Tirar los monsters a la basura",
			done: false
		};
		const actionAdd = {
			type: "add",
			payload: newTodo
		};
		let state = todoReducer(demoTodos, actionAdd);
		expect(state.length).toBe(3);
		expect(state).toEqual([...demoTodos, newTodo]);
		const actionDelete = {
			type: "delete",
			payload: newTodo.id
		};
		state = todoReducer(demoTodos, actionDelete);
		expect(state.length).toBe(2);
		expect(state).toEqual(demoTodos);
	});

	test("Deberia hacer el TOGGLE y poner en done el TODO seleccionado ", () => {
		const [firstItem, secondItem] = demoTodos;
		const actionToggleFirst = {
			type: "toggle",
			payload: firstItem.id
		};
		const actionToggleSecond = {
			type: "toggle",
			payload: secondItem.id
		};

		let state = todoReducer(demoTodos, {});
		expect(state[0].done).toBe(false);
		expect(state[1].done).toBe(false);

		state = todoReducer(state, actionToggleFirst);
		expect(state[0].done).toBe(true);
		expect(state[1].done).toBe(false);

        state = todoReducer(state, actionToggleSecond);
		expect(state[0].done).toBe(true);
		expect(state[1].done).toBe(true);

        state = todoReducer(state, actionToggleSecond);
		expect(state[0].done).toBe(true);
		expect(state[1].done).toBe(false);

        state = todoReducer(state, actionToggleFirst);
		expect(state[0].done).toBe(false);
		expect(state[1].done).toBe(false);

        state = todoReducer(state, actionToggleSecond);
		expect(state[0].done).toBe(false);
		expect(state[1].done).toBe(true);

		// console.log(state);

	});
});
