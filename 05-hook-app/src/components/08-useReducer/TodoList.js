import React from "react";
import { TodoListItem } from "./TodoListItem";
import PropTypes from 'prop-types';

export const TodoList = ({ todos, handleDelete, handleToggle }) => {
	return (
		<ul className='list-group list-group-flush'>
			{todos.map((todo, i) => (
				<TodoListItem
					key={todo.id}
					todo={todo}
					handleDelete={handleDelete}
					handleToggle={handleToggle}
					index={i}
				/>
			))}
		</ul>
	);
};
TodoList.propTypes = {
	todos: PropTypes.array.isRequired,
	handleDelete: PropTypes.func.isRequired,
	handleToggle: PropTypes.func.isRequired
};
